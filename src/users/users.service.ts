/* eslint-disable prettier/prettier */

import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserFetchFailedException } from './exception/userfetchfailed.exception';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async getUsers(user: User): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async getUser(): Promise<User[]> {
        try {
            return await this.usersRepository.find({
                select: ["fullName", "isActive"],
            });
        } catch (e) {
            console.log(e);
            throw new UserFetchFailedException(e); 
            }
    }

    async getUserId(_id: number): Promise<any> {
        try {
            const userData = await this.usersRepository.findOneBy({ "id": _id })
            return userData;
        } catch (e) {
            throw new UserFetchFailedException(e);

        }
    }

    create(user: User): Promise<User> {
        return this.usersRepository.save(
            this.usersRepository.create(user)
        );
    }

    async updateUser(user: User) {
        this.usersRepository.save(user)
    }

    async deleteUser(user: User) {
        this.usersRepository.delete(user);
    }
}
