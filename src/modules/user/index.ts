import { GraphQLModule } from '@graphql-modules/core'
import typeDefs from './user.schema'
import resolvers from './user.resolvers'

export default new GraphQLModule({
  typeDefs,
  resolvers,
})
