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
            name: 'Kilocalorie',
            integerOnly: true,
            positiveOnly: true,
            shortName: 'kcal'
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
        unitName: point.value.unit.name,
        unitShort: point.value.unit.shortName
      }
    }
  }
}

export default dataPointMapper()
