"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoSuchEntity = void 0;
const common_1 = require("@nestjs/common");
class NoSuchEntity extends common_1.HttpException {
    constructor(entityName) {
        super(`No such ${entityName}`, common_1.HttpStatus.NOT_FOUND);
    }
}
exports.NoSuchEntity = NoSuchEntity;
//# sourceMappingURL=no-such-bending-type.exception.js.map