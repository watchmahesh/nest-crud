/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserEntityRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User,UserEntityRepository])],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
