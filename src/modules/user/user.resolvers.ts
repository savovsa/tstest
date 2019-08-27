export default {
  User: {
    id: (user: any) => user.id,
    name: (user: any) => user.name,
  },
  Query: {
    currentUser: () => ({ id: 1, name: 'Sasho' }),
  },
}
