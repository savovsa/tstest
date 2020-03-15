import DataModel from './DataModel'
import { UserTable } from './types/UserTable.type'
import { RegisterInputUser } from '../modules/generated'

export default class UserModel extends DataModel {
  create(user: RegisterInputUser): Promise<UserTable> {
    return this.connection.insert(user).into('user')
  }

  async getById(id: string): Promise<UserTable | null> {
    const rows = await this.connection<UserTable>('user')
      .select()
      .where({ id, emailVerified: true })

    if (rows.length > 0) {
      return rows[0]
    }

    return null
  }
}
