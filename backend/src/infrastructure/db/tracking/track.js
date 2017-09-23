import Promise from 'bluebird'

import dataMapper from '../dataMappers/tracking/track'
import fsAdapter from '../adapters/fileSystemStorage'

import { first, map } from 'ramda'

export function trackDb (adapter, dataMapper) {
  const deserializePayload = map(dataMapper.deserialize)
  const serializeData = map(dataMapper.serialize)

  return {
    all () {
      const filterFn = (streamName) => streamName.startsWith('track_')
      return adapter.listStreams(filterFn)
        .then((streamKeys) => Promise.map(streamKeys, adapter.load))
        .then(map(deserializePayload))
        .then(map(first))
    },
    create (key, track) {
      return adapter.overwrite(key, serializeData([track]))
    },
    destroy (key) {
      return adapter.destroy(key)
    },
    load (key) {
      return adapter.load(key)
        .then(deserializePayload).then(first)
    }
  }
}

export default trackDb(fsAdapter('./data'), dataMapper)
