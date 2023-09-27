import { CreateUserDto } from 'src/realizations/user/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/realizations/user/entities/user.entity';
import { UserService } from 'src/realizations/user/user.service';
export declare class AuthService {
    private userService;
    private userRepository;
    constructor(userService: UserService, userRepository: Repository<UserEntity>);
    validate(loginDto: LoginDto): Promise<UserEntity>;
    signup(createUserDto: CreateUserDto): Promise<UserEntity>;
    login(loginDto: LoginDto): Promise<UserEntity>;
}
