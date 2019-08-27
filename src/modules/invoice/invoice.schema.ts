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

  type Client {
    id: ID!
    name: String
  }

  type InvoiceItem {
    id: ID!
    name: String
    unitType: UnitType
    price: Float
  }

  enum UnitType {
    PC
    KG
    L
  }

  extend type Query {
    invoiceById(id: ID!): Invoice
  }
`
