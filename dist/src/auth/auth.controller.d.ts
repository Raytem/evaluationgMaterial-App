import { CreateUserDto } from 'src/realizations/user/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { UserEntity } from 'src/realizations/user/entities/user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(createUserDto: CreateUserDto): Promise<UserEntity>;
    login(loginDto: LoginDto): Promise<UserEntity>;
}
