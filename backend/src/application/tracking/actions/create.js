import addPoint from '../../../tracking/services/addPoint'

export default (req, res) => {
  return addPoint(
    req.params.key,
    req.body.value,
    req.body.unit
  )
    .then(() => {
      res.status(201).end()
    })
    .catch((err) => {
      res.status(422).end(JSON.stringify({ error: err.message }))
    })
}
