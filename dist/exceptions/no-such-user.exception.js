"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoSuchUserException = void 0;
const common_1 = require("@nestjs/common");
class NoSuchUserException extends common_1.HttpException {
    constructor() {
        super('No such user', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.NoSuchUserException = NoSuchUserException;
//# sourceMappingURL=no-such-user.exception.js.map