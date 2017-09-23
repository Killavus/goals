import fs_ from 'fs'
import path from 'path'
import Promise from 'bluebird'

const fs = Promise.promisifyAll(fs_, { suffix: 'Promise' })

export function trackingDb (storagePath, dbApi) {
  const storageFile = (key) => path.resolve(
    __dirname,
    storagePath,
    `${key}.data`
  )

  const wrapError = (msg) => (err) => {
    throw new Error(msg + `: ${err.message}`)
  }

  const rethrow = (err) => { throw err }

  const concatData = (newData) => (oldData) => oldData.concat(newData)

  const rewriteData = (key) => (data) => {
    return dbApi.openPromise(storageFile(key), 'w+')
      .then(
        (fd) => {
          const writeStream = fs.createWriteStream(
            null,
            {
              autoClose: true,
              encoding: 'utf8',
              fd
            }
          )

          writeStream.end(JSON.stringify(data))
          return data
        },
        wrapError(`Failed to open datastream ${key} for writing`)
      )
  }

  const parseData = (data) => data.length === 0 ? [] : JSON.parse(data)

  const readData = (key) =>
    dbApi.readFilePromise(storageFile(key), 'utf8')
      .then(
        parseData,
        (err) => err.code === 'ENOENT'
          ? []
          : wrapError(`Failed to load datapoints stream with key ${key}`)
      )

  return {
    append (key, points) {
      return readData(key)
        .then(concatData(points), rethrow)
        .then(rewriteData(key), rethrow)
    },
    load (key) {
      return readData(key)
    },
    overwrite (key, points) {
      return rewriteData(key)(points)
    }
  }
}

export default trackingDb('./data', fs)
