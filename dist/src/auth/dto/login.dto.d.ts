import { CreateUserDto } from 'src/realizations/user/dto/create-user.dto';
declare const LoginDto_base: import("@nestjs/mapped-types").MappedType<Pick<CreateUserDto, "email" | "password">>;
export declare class LoginDto extends LoginDto_base {
}
export {};
