import getTrack from '../../../tracking/queries/getTrack'
import addPoint from '../../../tracking/services/addPoint'

export default (req, res) => {
  return getTrack(req.params.trackId).then((track) => {
    return addPoint(track, req.body.value)
  })
    .then((id) => {
      res.status(201).end(JSON.stringify({ id }))
    })
    .catch((err) => {
      res.status(422).end(JSON.stringify({ error: err.message }))
    })
}
