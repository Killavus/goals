import unitMapper from '../dataMappers/tracking/unit'
import Track from '../../../tracking/entities/track'

export function trackDataMapper (unitMapper) {
  return {
    serialize (track) {
      return {
        id: track.id,
        name: track.name,
        unit: unitMapper.serialize(track.unit)
      }
    },
    deserialize (rawTrack) {
      return new Track({
        id: rawTrack.id,
        name: rawTrack.name,
        unit: unitMapper.deserialize(rawTrack.unit)
      })
    }
  }
}

export default trackDataMapper(unitMapper)
