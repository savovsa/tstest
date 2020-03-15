import Knex from 'knex'

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('user', table => {
    table.increments('id')
    table.string('name', 50)
    table.string('email').notNullable()
    table.boolean('emailVerified').defaultTo(false)
    table.string('password').notNullable()
    table.string('token')
  })
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.raw('DROP TABLE "user" CASCADE')
}
