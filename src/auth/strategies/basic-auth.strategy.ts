import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from 'src/realizations/user/entities/user.entity';
import { BasicStrategy } from 'passport-http';

@Injectable()
export class BasicAuthStrategy extends PassportStrategy(BasicStrategy) {
  constructor(private authService: AuthService) {
    super({
      passReqToCallback: true,
      usernameField: 'email',
    });
  }

  async validate(req, email: string, password: string): Promise<UserEntity> {
    const user = await this.authService.validate({ email, password });
    if (!user) {
      throw new UnauthorizedException();
    }

    console.log('----User:');
    console.log({
      ...user,
      password: '***',
    });

    return user;
  }
}
