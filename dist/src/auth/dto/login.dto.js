"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_user_dto_1 = require("../../realizations/user/dto/create-user.dto");
class LoginDto extends (0, swagger_1.PickType)(create_user_dto_1.CreateUserDto, ['email', 'password']) {
}
exports.LoginDto = LoginDto;
//# sourceMappingURL=login.dto.js.map