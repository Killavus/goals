import db from '../../infrastructure/db/tracking/track'

export const getTrack = (db) =>
  (trackId) => db.load(trackId)

export default getTrack(db)
