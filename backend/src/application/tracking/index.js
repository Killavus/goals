import express from 'express'
import create from './actions/create'
import list from './actions/list'

const tracking = express()

tracking.get('/:key', list)
tracking.post('/:key', create)

export default tracking
