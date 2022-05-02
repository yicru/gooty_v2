import { createServer } from '@graphql-yoga/node'
import { NextApiRequest, NextApiResponse } from 'next'

const server = createServer<{
  req: NextApiRequest
  res: NextApiResponse
}>()

export default server
