/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, isBoolean, IsBoolean } from 'class-validator';

export class createDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;



  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}