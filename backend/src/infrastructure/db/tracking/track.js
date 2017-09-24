import path from 'path'
import Promise from 'bluebird'

import dataMapper from '../../dataMappers/tracking/track'
import fsAdapter from '../../adapters/fileSystemStorage'

import { first, map } from 'ramda'

export function trackDb (adapter, dataMapper) {
  const deserializePayload = map(dataMapper.deserialize)
  const serializeData = map(dataMapper.serialize)
  const first = (arr) => {
    if (arr.length === 0) {
      throw new Error(`Cannot take first element from an empty array.`)
    }

    return arr[0]
  }

  return {
    all () {
      const filterFn = (streamName) => streamName.startsWith('track_')
      return adapter.listStreams(filterFn)
        .then((streamKeys) => Promise.map(streamKeys, adapter.load))
        .then(map(deserializePayload))
        .then(map(first))
    },
    create (track) {
      const key = `track_${track.id}`
      return adapter.overwrite(key, serializeData([track]))
    },
    destroy (key) {
      return adapter.destroy(key)
    },
    load (trackId) {
      const key = `track_${trackId}`
      return adapter.load(key)
        .then(deserializePayload).then(first)
    }
  }
}

export default trackDb(fsAdapter(path.resolve(__dirname, './data')), dataMapper)
