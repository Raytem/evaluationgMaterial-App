import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { PaginationService } from 'src/services/pagination/pagination.service';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import { NoSuchException } from 'src/exceptions/no-such.exception';
import { EntitiesReferException } from 'src/exceptions/entities-refer.exception';

@Injectable()
export class UserService {
  constructor(
    private paginationService: PaginationService,

    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    let user;
    try {
      user = await this.findOne(null, createUserDto.email);
    } catch {}

    if (user) {
      throw new BadRequestException(
        `User with email '${createUserDto.email}' already exists`,
      );
    }

    const newUser = await this.userRepository.save(createUserDto);
    return new UserEntity(newUser);
  }

  async findAll(paginationDto: PaginationDto): Promise<UserEntity[]> {
    const pagination = this.paginationService.paginate(paginationDto);

    return await this.userRepository.find({
      ...pagination,
    });
  }

  async findOne(id: number, email?: string): Promise<UserEntity> {
    let user;

    if (id) {
      user = await this.userRepository.findOne({
        where: {
          id,
        },
      });
    } else {
      user = await this.userRepository.findOne({
        where: {
          email,
        },
      });
    }

    if (!user) {
      throw new NoSuchException('user');
    }

    return user;
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
    reqUser: UserEntity,
  ): Promise<UserEntity> {
    if (reqUser.id !== id) {
      throw new ForbiddenException('You can update only your account');
    }

    const user = await this.findOne(id);

    await this.userRepository.update(
      {
        id: user.id,
      },
      {
        ...updateUserDto,
      },
    );

    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: number, reqUser: UserEntity): Promise<UserEntity> {
    if (reqUser.id !== id) {
      throw new ForbiddenException('You can delete only your account');
    }

    const user = await this.findOne(id);

    try {
      await this.userRepository.remove(user);
    } catch {
      throw new EntitiesReferException('user');
    }

    return user;
  }
}
