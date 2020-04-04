import Knex from 'knex'

export const config = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: '111',
    database: 'tstest',
  },

  migrations: {
    // This is missing from the TypeScript types currently.
    stub: 'migration.stub',
  },
}

export const connection: Knex = Knex(config as Knex.Config)

connection
  .raw('select 1')
  .then(() => {
    console.log(`Connected to database - OK`)
  })
  .catch(err => {
    throw new Error(`Failed to connect to database`)
  })
