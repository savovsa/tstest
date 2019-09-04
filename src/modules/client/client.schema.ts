import { gql } from 'apollo-server-express'

export default gql`
  type Client {
    id: ID!
    name: String
  }

  extend type Query {
    getClientById(id: ID!): [Client]
  }

  input AddClientInput {
    name: String
  }

  extend type Mutation {
    addClient(client: AddClientInput!): Boolean
  }
`
