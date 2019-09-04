import { Resolvers, UnitType } from '../generated'
import InvoiceModel from '../../db/InvoiceModel'
import { connection } from '../../db'

const invoiceModel = new InvoiceModel(connection)

const resolvers: Resolvers = {
  Query: {
    getInvoiceById: () => ({
      id: '001',
      date: '2019-08-01',
      client: {
        id: '01',
        name: 'Maki',
      },
      items: [
        {
          id: '001',
          name: 'Programata na Muncho',
          unitType: UnitType.Pc,
          price: 1200.0,
        },
      ],
      user: {
        id: '1',
        name: 'Sasho',
      },
    }),
  },

  Mutation: {
    addInvoice: async (_, args) => {
      try {
        await invoiceModel.create(args.invoice)
        return true
      } catch (error) {
        console.error(error)
        return false
      }
    },
  },
}

export default resolvers
