import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_ADMIN_KEY } from 'src/decorators/admin.decorator';
import { UserEntity } from 'src/realizations/user/entities/user.entity';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const user: UserEntity | undefined = req.user;

    const isForAdmin = this.reflector.getAllAndOverride(IS_ADMIN_KEY, [
      context.getClass(),
      context.getHandler(),
    ]);

    if (isForAdmin) {
      if (!user || !user.isAdmin) {
        return false;
      }
    }

    return true;
  }
}
