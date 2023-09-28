"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoSuchException = void 0;
const common_1 = require("@nestjs/common");
class NoSuchException extends common_1.HttpException {
    constructor(entityName) {
        super(`No such ${entityName}`, common_1.HttpStatus.NOT_FOUND);
    }
}
exports.NoSuchException = NoSuchException;
//# sourceMappingURL=no-such.exception.js.map