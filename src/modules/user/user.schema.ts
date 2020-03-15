import { gql } from 'apollo-server-express'

export default gql`
  type User {
    id: ID!
    name: String
  }

  type Query {
    currentUser: User
    getUserById(id: ID!): User
  }

  input RegisterInputUser {
    # Full name
    name: String!
    email: String!
    password: String!
  }

  type Mutation {
    register(user: RegisterInputUser!): Boolean
    login(email: String!, password: String!): String!
  }
`
