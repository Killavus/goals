import Unit from '../valueObjects/unit'

export default class Track {
  constructor ({ id, name, unit }) {
    this.id = id
    this.name = name
    this.unit = unit

    this._validate()
  }

  _validate () {
    if (!this.id) {
      throw new Error('Track: Unit is required')
    }

    if (!this.name) {
      throw new Error('Track: Name is required')
    }

    if (!Unit.isPrototypeOf(this.unit)) {
      throw new Error('Track: Unit is invalid value')
    }
  }
}
