import Knex from 'knex'

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('client', table => {
    table.increments('id')
    table.string('name', 50)
  })
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.raw('DROP TABLE "client" CASCADE')
}
