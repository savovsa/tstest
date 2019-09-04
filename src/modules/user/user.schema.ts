import { gql } from 'apollo-server-express'

export default gql`
  type User {
    id: ID!
    name: String
  }

  type Query {
    currentUser: User
    getUserById(id: ID!): [User]
  }

  input RegisterInputUser {
    name: String!
  }

  type Mutation {
    register(user: RegisterInputUser!): Boolean
  }
`
