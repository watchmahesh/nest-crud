/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConnectionConfig } from './config/database.config';
import { CommonModule } from './common/common.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConnectionConfig),
  UsersModule,CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


