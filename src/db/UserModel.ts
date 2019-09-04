import DataModel from './DataModel'
import { RegisterInputUser, User } from '../modules/generated'

export default class UserModel extends DataModel {
  create(user: RegisterInputUser) {
    return this.connection.insert(user).into('user')
  }

  getById(id: string) {
    return this.connection<User>('user')
      .select()
      .where({ id })
  }
}
