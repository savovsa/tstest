import { Resolvers, Client } from '../generated'
import ClientModel from '../../db/ClientModel'
import { connection } from '../../db'

const clientModel = new ClientModel(connection)

const resolvers: Resolvers = {
  Client: {
    name: (client: Client) => client.name || '',
  },
  Query: {
    getClientById: (_, args) => clientModel.getById(args.id),
  },
  Mutation: {
    addClient: async (_, args) => {
      try {
        await clientModel.create(args.client)
        return true
      } catch (error) {
        console.error(error)
        return false
      }
    },
  },
}

export default resolvers
