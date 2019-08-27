import { Resolvers, User } from '../generated'

const resolvers: Resolvers = {
  User: {
    id: (user: User) => user.id,
    name: (user: User) => user.name || '',
  },
  Query: {
    currentUser: () => ({ id: '1', name: 'Sasho' }),
  },
}

export default resolvers
