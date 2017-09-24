import Track from '../entities/track'
import Unit from '../valueObjects/unit'

import uuidGenerator from '../../infrastructure/adapters/uniqueIdentity'
import db from '../../infrastructure/db/tracking/track'

export const addTrack = (db, generateId) =>
  (trackForm) => {
    const track = new Track({
      name: trackForm.name,
      id: uuidGenerator(),
      unit: new Unit(trackForm.unit)
    })

    return db.create(track)
      .then(() => track.id)
  }

export default addTrack(db, uuidGenerator)
