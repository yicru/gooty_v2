import { createServer } from '@graphql-yoga/node'
import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '../../lib/prisma'

const server = createServer<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema: {
    resolvers: {
      Query: {
        cafes: () =>
          prisma.cafe.findMany({
            include: {
              images: true,
            },
          }),
      },
    },
    typeDefs: /* GraphQL */ `
      type Image {
        url: String!
      }

      type Cafe {
        id: String!
        name: String!
        price: Int!
        openingHours: String!
        address: String!
        tel: String!
        latitude: String!
        longitude: String!
        videoUrl: String!
        images: [Image!]!
      }

      type Query {
        cafes: [Cafe!]!
      }
    `,
  },
})

export default server
