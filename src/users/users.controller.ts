/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entity/user.entity';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get()
    getUser() {
        return this.service.getUser();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUserId(params.id);
    }

    @Post()
    create(@Body() user: User) {
        return this.service.create(user);
    }
}