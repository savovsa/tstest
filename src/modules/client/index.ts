import { GraphQLModule } from '@graphql-modules/core'
import typeDefs from './client.schema'
import resolvers from './client.resolvers'

export default new GraphQLModule({
  typeDefs,
  resolvers,
})
