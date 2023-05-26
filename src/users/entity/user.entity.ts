/* eslint-disable prettier/prettier */
export class UserEntity {}
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    fullName:string;

    @Column() 
    isActive:boolean;
}