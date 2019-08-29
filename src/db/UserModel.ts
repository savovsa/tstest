import DataModel from './DataModel'
import { User } from '../modules/generated'

export default class UserModel extends DataModel {
  create(user: User) {
    return this.connection.insert(user).into('user')
  }
}
