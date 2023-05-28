/* eslint-disable prettier/prettier */

import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserFetchFailedException } from './exception/userfetchfailed.exception';
import { CustomException } from '../exception/custom.exception';
import { UserInterface, UserListRequest } from './interface/user.interface';

@Injectable()
export class UsersService {
   
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async getUsers(user: User): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async getUser(query?: UserListRequest) {
        try {
            const [result, count] = await this.usersRepository.findAndCount({
                skip: query.attributes.offset ? query.attributes.offset : 0,
                take: query.attributes.limit ? query.attributes.limit : 25,
              });
              return { data: result, count };
        } catch (e) {
            throw new UserFetchFailedException(e);
            }
    }

    async getUserId(_id: number): Promise<any> {
        try {
            const userData = await this.usersRepository.findOneBy({ "id": _id })
            if(!userData){

                throw new UserFetchFailedException('user not found')
            }
            return userData;
        } catch (e) {

            throw new UserFetchFailedException(e);

        }
    }

    create(user:UserInterface ): Promise<User> {
        try {
        return this.usersRepository.save(
            this.usersRepository.create(user)
        );
    } catch (e) {

        throw new CustomException('failed data to create',404);
        // throw new UserFetchFailedException(e);

    }
    }

    async updateUser(user: User) {
        this.usersRepository.save(user)
    }

    async deleteUser(user: User) {
        this.usersRepository.delete(user);
    }

   
}
