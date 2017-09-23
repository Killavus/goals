import addTrack from '../../../tracking/services/addTrack'

export default (req, res) => {
  return addTrack(req.body.track)
    .then(() => res.status(201).end())
    .catch((err) => res.status(422).end(JSON.stringify({ error: err.message })))
}
