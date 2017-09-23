import fs_ from 'fs'
import path from 'path'
import Promise from 'bluebird'
import { curry } from 'ramda'

const fs = Promise.promisifyAll(fs_, { suffix: 'Thenable' })

export default function fileSystemStorage (dataPath, fileSystem = fs) {
  const storageFile = (key) => path.resolve(
    __dirname,
    dataPath,
    `${key}.json`
  )

  const concatData = curry(
    (newData, oldData) => oldData.concat(newData)
  )

  const rethrowError = (err) => { throw err }
  const parseFileContents = (data) => data.length === 0 ? [] : JSON.parse(data)
  const emptyDataIfNoFile = (err) => err.code === 'ENOENT' ? [] : rethrowError(err)
  const wrapError = curry((msg, err) => { throw new Error(`${msg}: ${err}`) })

  const readFile = (path) =>
    fileSystem.readFileThenable(path, 'utf8')
      .then(parseFileContents, emptyDataIfNoFile)
      .catch(wrapError('Failed to read file'))

  const overwriteFile = curry(
    (path, newData) =>
      fileSystem.writeFileThenable(
        path,
        JSON.stringify(newData),
        { flag: 'w+' }
      )
        .catch(wrapError('Failed to overwrite file contents'))
  )

  const deleteFile = (path) =>
    fileSystem.unlinkThenable(path)
      .catch(wrapError('Failed to delete file'))

  return {
    load (key) {
      return readFile(storageFile(key))
    },
    append (key, data) {
      return readFile(storageFile(key))
        .then(concatData(data))
        .then(overwriteFile(storageFile(key)))
    },
    destroy (key) {
      return deleteFile(storageFile(key))
    },
    overwrite (key, data) {
      return overwriteFile(storageFile(key), data)
    }
  }
}
