import listPoints from '../../../tracking/queries/listPoints'
import dataMapper from '../../../infrastructure/dataMappers/tracking/dataPoint'

export default (req, res) => {
  return listPoints(req.params.key)
    .then((points) => {
      res.status(200).end(JSON.stringify(points.map(dataMapper.serialize)))
    })
    .catch((err) => res.status(422).end(JSON.stringify({ error: err.message })))
}
