import { AuthService } from '../auth.service';
import { UserEntity } from 'src/realizations/user/entities/user.entity';
import { BasicStrategy } from 'passport-http';
declare const BasicAuthStrategy_base: new (...args: any[]) => BasicStrategy;
export declare class BasicAuthStrategy extends BasicAuthStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<UserEntity>;
}
export {};
