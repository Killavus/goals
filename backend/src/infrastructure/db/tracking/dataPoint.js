import dataMapper from '../dataMappers/tracking/dataPoint'
import fsAdapter from '../adapters/fileSystemStorage'

import { map } from 'ramda'

export function dataPointDb (adapter, dataMapper) {
  const deserializePayload = map(dataMapper.deserialize)
  const serializeData = map(dataMapper.serialize)

  return {
    load (key) {
      return adapter.load(key)
        .then(deserializePayload)
    },
    append (key, newData) {
      return adapter.append(key, serializeData(newData))
    }
  }
}

export default dataPointDb(fsAdapter('./data'), dataMapper)
