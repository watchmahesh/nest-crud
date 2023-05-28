/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UtilsModule } from '../utils/query.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]),UtilsModule],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
