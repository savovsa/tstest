import { Resolvers, User } from '../generated'
import UserModel from '../../db/UserModel'
import { connection } from '../../db'

const userModel = new UserModel(connection)

const resolvers: Resolvers = {
  User: {
    name: (user: User) => user.name || '',
  },
  Query: {
    currentUser: () => ({ id: '1', name: 'Sasho' }),
    getUserById: (_, args) => userModel.getById(args.id),
  },
  Mutation: {
    register: async (_, args) => {
      try {
        await userModel.create(args.user)
        return true
      } catch (error) {
        console.error(error)
        return false
      }
    },
  },
}

export default resolvers
