import uuidGenerator from '../../infrastructure/adapters/uniqueIdentity'

import DataPoint from '../entities/dataPoint'
import PointValue from '../valueObjects/pointValue'

export function trackDataPointService (generateId) {
  return (track) => ({
    newDataPoint ({ valueNumber, timestamp }) {
      return new DataPoint({
        id: generateId(),
        value: new PointValue({
          number: valueNumber,
          unit: track.unit
        }),
        timestamp
      })
    },
    pointsStreamKey () {
      return `points_${track.id}`
    }
  })
}

trackDataPointService.prototype.streamKey = (trackId) => `track_${trackId}`

export default trackDataPointService(uuidGenerator)
