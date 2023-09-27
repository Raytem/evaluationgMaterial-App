"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_dto_1 = require("../../realizations/user/dto/create-user.dto");
class LoginDto extends (0, mapped_types_1.PickType)(create_user_dto_1.CreateUserDto, ['email', 'password']) {
}
exports.LoginDto = LoginDto;
//# sourceMappingURL=login.dto.js.map