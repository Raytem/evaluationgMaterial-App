import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_DEVELOPER_KEY } from 'src/decorators/developer.decorator';
import { UserEntity } from 'src/realizations/user/entities/user.entity';

@Injectable()
export class DeveloperGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const user: UserEntity | undefined = req.user;

    const isForDeveloper = this.reflector.getAllAndOverride(IS_DEVELOPER_KEY, [
      context.getClass(),
      context.getHandler(),
    ]);

    if (isForDeveloper) {
      if (!user || !user.isDeveloper) {
        return false;
      }
    }

    return true;
  }
}
