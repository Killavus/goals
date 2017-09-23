import listTracks from '../../../tracking/queries/listTracks'
import trackListPresenter from '../presenters/trackList'

export default (req, res) => {
  return listTracks()
    .then((tracksWithPoints) => {
      res.status(200).end(trackListPresenter(tracksWithPoints))
    })
    .catch((err) => res.status(422).end(JSON.stringify({ error: err.message })))
}
