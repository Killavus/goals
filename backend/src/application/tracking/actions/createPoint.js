import getTrack from '../../../tracking/queries/getTrack'
import addPoint from '../../../tracking/services/addPoint'

export default (req, res) => {
  return getTrack(req.params.trackId).then((track) => {
    addPoint(track, req.body.value)
  })
    .then(() => {
      res.status(201).end()
    })
    .catch((err) => {
      res.status(422).end(JSON.stringify({ error: err.message }))
    })
}
