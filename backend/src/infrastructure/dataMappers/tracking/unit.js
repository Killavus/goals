import Unit from '../../../tracking/valueObjects/unit'

export function unitDataMapper () {
  return {
    serialize ({ name, shortName, integerOnly, positiveOnly }) {
      return {
        name,
        shortName,
        integerOnly,
        positiveOnly
      }
    },
    deserialize ({ name, shortName, integerOnly, positiveOnly }) {
      return new Unit({
        name,
        shortName,
        integerOnly,
        positiveOnly
      })
    }
  }
}

export default unitDataMapper()
