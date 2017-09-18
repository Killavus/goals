export default class DataPoint {
  constructor ({ id, timestamp, value }) {
    this.id = id
    this.timestamp = timestamp
    this.value = value

    this._validate()
  }

  time () {
    return Date.parse(this.timestamp)
  }

  _validate () {
    if (!this.id) {
      throw new Error('DataPoint: ID is required')
    }

    if (!this.timestamp) {
      throw new Error('DataPoint: Timestamp is required')
    }

    if (!this.value) {
      throw new Error('DataPoint: Value is required')
    }

    if (this.timestamp && Number.isNaN(Date.parse(this.timestamp))) {
      throw new Error(`DataPoint: Timestamp is in invalid format`)
    }
  }
}
