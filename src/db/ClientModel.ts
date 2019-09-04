import DataModel from './DataModel'
import { AddClientInput, Client } from '../modules/generated'

export default class ClientModel extends DataModel {
  create(client: AddClientInput) {
    return this.connection.insert(client).into('client')
  }

  getById(id: string) {
    return this.connection<Client>('client')
      .select()
      .where({ id })
  }
}
