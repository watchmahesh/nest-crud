/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

/* eslint-disable prettier/prettier */
export class ListUserDto {
    @ApiProperty({example: 1})
    @IsOptional()
    // @IsNumber({}, {
    //   message:'page number must be number'
    // })
    page: number;

    @ApiProperty({example: 20})
    @IsOptional()
    // @IsNumber({},{
    //     message:'limit number must be number'
    // })
    limit: number;

  }
