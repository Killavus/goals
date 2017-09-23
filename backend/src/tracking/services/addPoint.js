import db from '../../infrastructure/db/tracking'
import dataPointService from '../domainServices/trackDataPointService'
import currentDate from '../../infrastructure/adapters/currentDate'

export const addPoint = (db, currentDate) =>
  (track, valueNumber) => {
    const pointService = dataPointService(track)
    const now = currentDate()

    const point = pointService.newDataPoint({
      valueNumber,
      timestamp: new Date(now).toISOString()
    })
    return db.append(pointService.pointsStreamKey(), [point])
  }

export default addPoint(db, currentDate)
