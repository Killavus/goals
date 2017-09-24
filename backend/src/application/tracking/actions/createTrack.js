import addTrack from '../../../tracking/services/addTrack'

export default (req, res) => {
  return addTrack(req.body.track)
    .then((id) => res.status(201).end(JSON.stringify({ id })))
    .catch((err) => res.status(422).end(JSON.stringify({ error: err.message })))
}
