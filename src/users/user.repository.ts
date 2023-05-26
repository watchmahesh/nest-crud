/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';

export class UserEntityRepository extends Repository<UserEntity> {}