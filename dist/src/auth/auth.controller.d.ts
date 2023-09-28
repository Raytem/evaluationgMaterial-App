import { CreateUserDto } from 'src/realizations/user/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(createUserDto: CreateUserDto): Promise<import("../realizations/user/entities/user.entity").UserEntity>;
    login(loginDto: LoginDto): Promise<import("../realizations/user/entities/user.entity").UserEntity>;
}
