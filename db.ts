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

const instance: Knex = Knex(config as Knex.Config)

instance
  .raw('select 1')
  .then(() => {
    console.log(`Connected to database - OK`)
  })
  .catch(err => {
    console.error(`Failed to connect to database: ${err}`)

    process.exit(1)
  })

export const db = () => instance

// Returns a timestamp suitable for inserting into Postgres

export const timestamp = (): string => new Date().toUTCString()
