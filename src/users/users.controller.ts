/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get,Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entity/user.entity';
import { createDto } from './dto/user.dto';

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
    create(@Body() dto: createDto) {
        return this.service.create(dto);
    }
}