import Knex from 'knex'

import { UnitType } from '../src/modules/generated'

export async function up(knex: Knex): Promise<any> {
  return knex.schema
    .createTable('invoice', table => {
      table.increments('id')
      table.date('date')
      table
        .integer('clientId')
        .references('id')
        .inTable('client')
      table
        .integer('userId')
        .references('id')
        .inTable('user')
    })
    .createTable('invoiceItem', table => {
      table.integer('itemId')
      table
        .integer('invoiceId')
        .references('id')
        .inTable('invoice')
      table.string('name')
      table.float('quantity')
      table.float('price')
      table.string('currency', 3)

      const unitTypeEnumValues = Object.values(UnitType).filter(
        value => typeof value === 'string',
      )

      table.enu('unitType', unitTypeEnumValues)
    })
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema
    .raw('DROP TABLE "invoiceItem"')
    .then(() => knex.schema.raw('DROP TABLE "invoice" CASCADE'))
}
