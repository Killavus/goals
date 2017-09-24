import { curry } from 'ramda'
import dataPointService from '../domainServices/trackDataPointService'
import db from '../../infrastructure/db/tracking/dataPoint'

export const listDataPoints = curry((db, track) =>
  db.load(dataPointService(track).pointsStreamKey())
)

export default listDataPoints(db)
