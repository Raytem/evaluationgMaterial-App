import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { PaginationService } from 'src/pagination/pagination.service';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
export declare class UserService {
    private paginationService;
    private userRepository;
    constructor(paginationService: PaginationService, userRepository: Repository<UserEntity>);
    create(createUserDto: CreateUserDto): Promise<UserEntity>;
    findAll(paginationDto: PaginationDto): Promise<UserEntity[]>;
    findOne(id: number, email?: string): Promise<UserEntity>;
    update(id: number, updateUserDto: UpdateUserDto, reqUser: UserEntity): Promise<UserEntity>;
    remove(id: number, reqUser: UserEntity): Promise<UserEntity>;
}
