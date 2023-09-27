import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from 'src/realizations/user/entities/user.entity';
import { Request } from 'express';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passReqToCallback: true,
    });
  }

  async validate(
    req: Request,
    email: string,
    password: string,
  ): Promise<UserEntity> {
    const user = await this.authService.validate({ email, password });
    if (!user) {
      throw new UnauthorizedException();
    }

    console.log('----User:');
    console.log({
      ...user,
      password: '***',
    })

    return user;
  }
}
