import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from 'src/decorators/public.decorator';
import { LoginDto } from '../dto/login.dto';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalHeadersAuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,

    private authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getClass(),
      context.getHandler(),
    ]);

    if (isPublic) {
      return true;
    }

    const req: Request = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;

    const loginDto = this.extractLoginDtoFromAuthorization(authHeader);
    if (!loginDto) {
      return false;
    }

    const user = await this.authService.validate(loginDto);
    req.user = user;

    console.log('----User:');
    console.log({
      ...user,
      password: '***',
    });

    return true;
  }

  extractLoginDtoFromAuthorization(authHeader: string): LoginDto {
    if (!authHeader || !/^.*\/.*$/.test(authHeader)) {
      return null;
    }

    const email = authHeader.split('/', 1)[0];
    const password = authHeader.slice(email.length + 1);

    return {
      email,
      password,
    };
  }
}
