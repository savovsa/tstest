import { gql } from 'apollo-server-express'

export default gql`
  type Invoice {
    id: ID!
    date: Date
    client: Client
    items: [InvoiceItem]
    user: User
  }

  """
  Date in ISO 8601 format
  https://en.wikipedia.org/wiki/ISO_8601
  """
  scalar Date

  type InvoiceItem {
    id: ID!
    name: String
    quantity: Float
    unitType: UnitType
    price: Float
  }

  enum UnitType {
    PC
    KG
    L
  }

  extend type Query {
    getInvoiceById(id: ID!): Invoice
  }

  input InvoiceItemInput {
    id: ID!
    quantity: Float!
    price: Float!
  }

  input InvoiceInput {
    date: Date!
    clientId: ID!
    items: [InvoiceItemInput!]!
  }

  extend type Mutation {
    addInvoice(invoice: InvoiceInput!): Boolean
  }
`
