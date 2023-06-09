/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConnectionConfig } from './config/database.config';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConnectionConfig),
  UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


