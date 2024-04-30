import { Test } from '@nestjs/testing';
import { UserService } from 'src/realizations/user/user.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { UserEntity } from 'src/realizations/user/entities/user.entity';
import { CreateUserDto } from 'src/realizations/user/dto/create-user.dto';
import { MockType } from 'src/test/types/mock-type.type';
import { getRepositoryToken } from '@nestjs/typeorm';
import { repositoryMockFactory } from 'src/test/factories/repository-mock.factory';
import { Repository } from 'typeorm';

describe('AuthService', () => {
  const mockUserService = {
    create: jest.fn(),
    findOne: jest.fn(),
  };
  let authService: AuthService;
  let userService: UserService;
  let userRepository: MockType<Repository<UserEntity>>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UserService, useValue: mockUserService },
        { provide: getRepositoryToken(UserEntity), useFactory: repositoryMockFactory },
      ],
    }).compile();

    userService = moduleRef.get<UserService>(UserService);
    authService = moduleRef.get<AuthService>(AuthService);
    userRepository = moduleRef.get(getRepositoryToken(UserEntity));
  });

  describe('validate', () => {
    const loginDto: LoginDto = {
      email: 'test@gmail.com',
      password: 'test123',
    };

    const mockUserEntity: UserEntity = {
      id: 1,
      fio: 'test test',
      isAdmin: false,
      isDeveloper: false,
      email: 'test@gmail.com',
      password: 'otherPassword',
      materials: [],
    };

    it('should throw an error if password is invalid', () => {
      jest.spyOn(userService, 'findOne').mockResolvedValue(mockUserEntity);
      expect(async () => {
        return await authService.validate(loginDto);
      }).rejects.toThrow();
    });
  });

  describe('signup', () => {
    const createUserDto: CreateUserDto = {
      fio: 'test user',
      email: 'test@gmail.com',
      password: 'test123',
    };

    const mockUserEntity: UserEntity = {
      id: 1,
      fio: 'test user',
      email: 'test@gmail.com',
      password: 'test123',
      isAdmin: false,
      isDeveloper: false,
      materials: [],
    };

    it('should create user', async () => {
      jest.spyOn(userService, 'create').mockResolvedValue(mockUserEntity);
      const res = await authService.signup(createUserDto);

      expect(res).resolves.toEqual(mockUserEntity);
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
