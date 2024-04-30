import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/realizations/user/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/realizations/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/realizations/user/user.service';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validate(loginDto: LoginDto): Promise<UserEntity> {
    try {
      const user = await this.userService.findOne(null, loginDto.email);

      const isEqual = await bcrypt.compare(loginDto.password, user.password);

      if (!isEqual) {
        throw new UnauthorizedException('Invalid password');
      }

      return user;
    } catch (e) {
      throw e;
    }
  }

  async signup(createUserDto: CreateUserDto) {
    try {
      const password = await bcrypt.hash(createUserDto.password, 10);
      const user = await this.userService.create({
        ...createUserDto,
        password,
      });

      return user;
    } catch (e) {
      throw e;
    }
  }

  async login(loginDto: LoginDto): Promise<UserEntity> {
    try {
      const user = await this.validate(loginDto);
      return user;
    } catch (e) {
      throw e;
    }
  }
}
