/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import * as request from 'supertest';
import { UsersModule } from '../src/users/users.module';
import { User } from '../src/users/entity/user.entity';
import { Repository } from 'typeorm/repository/Repository';

jest.setTimeout(30000);

describe('UserController (e2e)', () => {
  let app: INestApplication;

  let userRepository: Repository<User>;

  const clearDatabase = async () => {
    await userRepository.delete({});
};

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        UsersModule,
        TypeOrmModule.forRoot({
          ...require('../src/config/ormconfig.test'),
          entities: [User],
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
      userRepository = moduleFixture.get<Repository<User>>(getRepositoryToken(User));

    await app.init();
  });

  afterAll(async () => {
    await clearDatabase();
    await app.close();
  });

  describe('/users (GET)', () => {
    it('should return an array of users', () => {
      return request(app.getHttpServer())
        .get('/users')
        .expect(200)
        .expect([]);
    });
  });

  describe('/users (POST)', () => {
    it('should create a new user', async () => {
      const newUser = {
        fullName: 'John Doe',
        isActive:true,
      };

      const response = await request(app.getHttpServer())
        .post('/users')
        .send(newUser)
        .expect(201);
      const createdUser = response.body;
      expect(createdUser).toHaveProperty('id');
      expect(createdUser.fullName).toBe(newUser.fullName);
      expect(createdUser.isActive).toBe(true);
    });
    it('get user detail', async () => {
        const response= await request(app.getHttpServer()).get('/users/1')
        console.log(response.body)
      expect(response.statusCode).toBe(200);
  });
})
});