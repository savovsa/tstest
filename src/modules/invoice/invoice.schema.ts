import { gql } from 'apollo-server-express'

export default gql`
  type Invoice {
    id: ID!
    date: Date
    client: Client
    items: [InvoiceItem]
    user: User
  }

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
    pc
    kg
    l
  }

  extend type Query {
    invoiceById(id: ID!): Invoice
  }
`
