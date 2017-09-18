import bodyParser from 'body-parser'
import express from 'express'
import logger from 'morgan'

import tracking from './tracking'

export const makeServer = (userOptions) => {
  const defaults = {
    port: 3000
  }

  const options = { ...defaults, userOptions }
  const server = express()

  server.use(bodyParser.json())
  server.use(logger('tiny'))
  server.use('/tracking', tracking)

  return [server, options]
}

export default function start (userOptions) {
  const [server, options] = makeServer(userOptions)

  server.listen(options.port, () => {
    console.log(`Starting server on localhost:${options.port}`)
  })
}
