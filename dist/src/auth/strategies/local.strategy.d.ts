import { AuthService } from '../auth.service';
import { UserEntity } from 'src/realizations/user/entities/user.entity';
import { Request } from 'express';
import { BasicStrategy } from 'passport-http';
declare const LocalStrategy_base: new (...args: any[]) => BasicStrategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(req: Request, email: string, password: string): Promise<UserEntity>;
}
export {};
