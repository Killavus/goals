import db from '../../infrastructure/db/tracking'
import dataMapper from '../../infrastructure/dataMappers/tracking/dataPoint'
import currentDate from '../../infrastructure/adapters/currentDate'
import idGenerator from '../../infrastructure/adapters/uniqueIdentity'

import DataPoint from '../entities/dataPoint'
import PointValue from '../valueObjects/pointValue'
import Unit from '../valueObjects/unit'

export const addPoint = (db, currentDate, generateID, dataMapper) =>
  (key, value, unit) => {
    const now = currentDate()
    const point = new DataPoint({
      id: generateID(),
      value: new PointValue({
        number: value,
        unit: new Unit({
          integerOnly: true,
          name: 'Kilocalorie',
          positiveOnly: true,
          shortName: 'kcal'
        })
      }),
      timestamp: new Date(now).toISOString()
    })

    return db.append(key, [dataMapper.serialize(point)])
  }

export default addPoint(db, currentDate, idGenerator, dataMapper)
