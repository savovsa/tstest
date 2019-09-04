import Knex from 'knex'

export default class DataModel {
  public connection: Knex

  constructor(newConnection: Knex) {
    this.connection = newConnection
  }
}
