import { Resolvers, UnitType } from '../generated'

const resolvers: Resolvers = {
  Query: {
    invoiceById: () => ({
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
}

export default resolvers
