import Promise from 'bluebird'

import trackDb from '../../infrastructure/db/tracking/track'
import pointDb from '../../infrastructure/db/tracking/dataPoint'

import { zipWith } from 'ramda'

export const listTracks = (trackDb, pointDb) =>
  () => {
    const tracksThenable = trackDb.all()
    const pointsThenable = tracksThenable.then((tracks) =>
      Promise.map(tracks, pointDb.load)
    )

    const combinePayloads = zipWith((track, points) => ({ track, points }))

    return Promise.all([
      tracksThenable,
      pointsThenable
    ]).then(([tracks, trackPoints]) => combinePayloads(tracks, trackPoints))
  }

export default listTracks(trackDb, pointDb)
