/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { User } from '../../src/users/entity/user.entity';
import { DataSource } from 'typeorm';


export class UserFactory {
  private connection: DataSource;

  static new(connection: DataSource) {
    return new UserFactory(connection);
  }

  constructor(connection: DataSource) {
    this.connection = connection;
  }


  async create(_user: Partial<User> = {}) {
    const payload = {
      id: 1,
      fullName: 'ram',
      isActive: true,
    };
    return await this.connection.manager.save(User, payload);
  }



}
