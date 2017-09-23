import trackService from '../domainServices/trackDataPointService'

export const getTrack = (db) =>
  (trackId) => db.load(trackService.streamKey(trackId))
