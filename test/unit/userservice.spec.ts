import { User } from './../../src/users/entity/user.entity';
/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from '../../src/users/users.service';
import { UserInterface } from '../../src/users/interface/user.interface';

const createUserDto: UserInterface = {
    fullName: 'mahesh',
    isActive: true,
};





describe('UserService', () => {
    let service: UsersService, userRepository;
    let repo: Repository<User>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({

            providers: [
                UsersService,


                {
                    provide: getRepositoryToken(User),
                    useClass: Repository,
                },
            ],
        }).compile();

        service = module.get<UsersService>(UsersService);
        userRepository = module.get<Repository<User>>(getRepositoryToken(User));

    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });


    describe('create User', () => {
        it('should User', async() => {
        jest.spyOn(service, 'create').mockResolvedValue(createUserDto as any );
        try {
          const result = await service.create(createUserDto);
          expect(result).toEqual({
            fullName: createUserDto.fullName,
            isActive: createUserDto.isActive,
          });
        } catch (e) {
          expect(e.message).toEqual('User Create retrieve operation failed.')}
      });
      });

});

