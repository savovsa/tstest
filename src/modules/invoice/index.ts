import { GraphQLModule } from '@graphql-modules/core'
import typeDefs from './invoice.schema'
import resolvers from './invoice.resolvers'

export default new GraphQLModule({
  typeDefs,
  resolvers,
})
