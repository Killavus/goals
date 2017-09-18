export default class Unit {
  constructor (rawOptions) {
    const defaults = {
      integerOnly: false,
      positiveOnly: false
    }

    const options = { ...defaults, ...rawOptions }

    this.integerOnly = options.integerOnly
    this.name = options.name
    this.positiveOnly = options.positiveOnly
    this.shortName = options.shortName

    this._validate()
  }

  _validate () {
    if (!this.name) {
      throw new Error('Unit: Name is required')
    }

    if (!this.shortName) {
      throw new Error(`Unit: Short name is required`)
    }
  }
}
