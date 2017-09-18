export default class PointValue {
  constructor ({ number, unit }) {
    this.number = number
    this.unit = unit

    this._validate()
  }

  _validate () {
    console.log(Number.isSafeInteger(this.number))
    if (this.unit.integerOnly && !Number.isSafeInteger(this.number)) {
      throw new Error(`Value must be an integer`)
    }

    if (this.unit.positiveOnly && this.number < 0) {
      throw new Error(`Value must be positive`)
    }
  }
}
