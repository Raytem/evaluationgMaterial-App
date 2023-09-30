import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import { UserEntity } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(paginationDto: PaginationDto): Promise<UserEntity[]>;
    findOne(id: number): Promise<UserEntity>;
    update(id: number, updateUserDto: UpdateUserDto, reqUser: UserEntity): Promise<UserEntity>;
    remove(id: number, reqUser: UserEntity): Promise<UserEntity>;
}
