import UserModel from './UserModel'
import { connection } from './index'
import { RegisterInputUser } from '../modules/generated'

// Integration test
// they should follow these rules:
// 1. Execution order shouldn't matter
// 2. If you run the same tests multiple times you should get the same results

// for more information https://www.toptal.com/nodejs/nodejs-guide-integration-tests

describe('User data model', () => {
  const userModel = new UserModel(connection)

  test('can create a user', async () => {
    const user: RegisterInputUser = {
      name: 'sasho',
      email: 'sasho@email.com',
      password: 'Password123',
    }

    await userModel.create(user)
    const result = await connection('user')
      .select(['password', 'email', 'name'])
      .where({ email: 'sasho@email.com' })

    // cleanup
    await connection('user')
      .where({ name: 'sasho' })
      .del()

    expect(result).toEqual([user])
  })
})
