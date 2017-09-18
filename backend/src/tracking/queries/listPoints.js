import db from '../../infrastructure/db/tracking'
import dataMapper from '../../infrastructure/dataMappers/tracking/dataPoint'

export const listPoints = (db, dataMapper) =>
  (key) => {
    return db.load(key).then((points) => points.map(dataMapper.deserialize))
  }

export default listPoints(db, dataMapper)
