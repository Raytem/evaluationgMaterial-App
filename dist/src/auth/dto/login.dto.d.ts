import { CreateUserDto } from 'src/realizations/user/dto/create-user.dto';
declare const LoginDto_base: import("@nestjs/common").Type<Pick<CreateUserDto, "password" | "email">>;
export declare class LoginDto extends LoginDto_base {
}
export {};
