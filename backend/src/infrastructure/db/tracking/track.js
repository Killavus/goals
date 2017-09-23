import dataMapper from '../dataMappers/tracking/track'
import fsAdapter from '../adapters/fileSystemStorage'

import { first, map } from 'ramda'

export function trackDb (adapter, dataMapper) {
  const deserializePayload = map(dataMapper.deserialize)
  const serializeData = map(dataMapper.serialize)

  return {
    load (key) {
      return adapter.load(key)
        .then(deserializePayload).then(first)
    },
    create (key, track) {
      return adapter.overwrite(key, serializeData([track]))
    },
    destroy (key) {
      return adapter.destroy(key)
    }
  }
}

export default trackDb(fsAdapter('./data'), dataMapper)
