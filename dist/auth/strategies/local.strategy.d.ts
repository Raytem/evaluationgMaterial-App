import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { UserEntity } from 'src/realizations/user/entities/user.entity';
import { Request } from 'express';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(req: Request, email: string, password: string): Promise<UserEntity>;
}
export {};
