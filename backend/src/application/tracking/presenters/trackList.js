import { map, omit } from 'ramda'

export default function trackListPresenter (list) {
  const represent = map(({ track, points }) => Object.assign({}, track, {
    points: map(omit(['unit']), points)
  }))

  return JSON.stringify(represent(list))
}
