import express from 'express'

import modules from './modules'
import { ApolloServer } from 'apollo-server-express'

const PORT = 4000
const apolloServer = new ApolloServer({
  modules,
  context: ({ req, res }: any) => ({ req, res }),
})
const app = express()

apolloServer.applyMiddleware({
  app,
})
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is listening on port ${PORT}`)
})
