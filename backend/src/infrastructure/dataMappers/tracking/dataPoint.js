import Point from '../../../tracking/entities/dataPoint'
import Unit from '../../../tracking/valueObjects/unit'
import Value from '../../../tracking/valueObjects/pointValue'

export function dataPointMapper () {
  return {
    deserialize (rawPoint) {
      return new Point({
        id: rawPoint.id,
        value: new Value({
          number: rawPoint.value,
          unit: new Unit({
            name: rawPoint.unit.name,
            integerOnly: rawPoint.unit.integerOnly,
            positiveOnly: rawPoint.unit.positiveOnly,
            shortName: rawPoint.unit.shortName
          })
        }),
        timestamp: rawPoint.timestamp
      })
    },
    serialize (point) {
      return {
        id: point.id,
        value: point.value.number,
        timestamp: point.timestamp,
        unit: point.value.unit
      }
    }
  }
}

export default dataPointMapper()
