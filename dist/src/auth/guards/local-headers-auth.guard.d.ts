import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { LoginDto } from '../dto/login.dto';
import { AuthService } from '../auth.service';
export declare class LocalHeaderAuthGuard implements CanActivate {
    private reflector;
    private authService;
    constructor(reflector: Reflector, authService: AuthService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    extractLoginDtoFromAuthorization(authHeader: string): LoginDto;
}
