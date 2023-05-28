/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get,Param, Res, Query} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entity/user.entity';
import { createDto } from './dto/user.dto';
import { AbstractController } from '../common/common.controller';
import { Response } from "express";
import { ApiQuery } from '@nestjs/swagger';
import { ListUserDto } from './dto/listUser.dto';
import { QueryUtils } from '../utils/query.utils';
import { QueryResponse } from '../interface/request-response.interface';

@Controller('users')
export class UsersController extends AbstractController {

    constructor(private service: UsersService,
        private readonly queryUtils: QueryUtils
        )
     {
        super();
    }

    @Get()
    @ApiQuery({ name: 'page', required: false, type: Number })
    @ApiQuery({ name: 'limit', required: false, type: Number })
     async getUser(@Query() query:ListUserDto,@Res() res : Response) {
        const args = {
            ...(await this.queryUtils.getQueryParams(query)),
          };
        const data= await this.service.getUser({
            attributes: {
                ...args,
              },
        });
        const response: QueryResponse = {
            totalRecords: data.count,
            totalPages: Math.ceil(data.count / args.limit),
            page: args.page,
            limit: args.limit,
            data: data.data,
          };
        this.successResponse(res,'User account details fetched successfully.',response)

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