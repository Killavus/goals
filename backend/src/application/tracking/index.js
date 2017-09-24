import express from 'express'
import createTrack from './actions/createTrack'
import createPoint from './actions/createPoint'
import listTracks from './actions/listTracks'

const tracking = express()

tracking.get('/', listTracks)
tracking.post('/tracks', createTrack)
tracking.post('/:trackId/points', createPoint)

export default tracking
