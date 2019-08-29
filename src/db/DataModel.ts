import Knex from 'knex'

export default class DataModel {
  constructor(connection: Knex) {
    this.connection = connection
  }

  public connection: Knex
}
