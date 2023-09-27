"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoSuchAbrasionTypeException = void 0;
const common_1 = require("@nestjs/common");
class NoSuchAbrasionTypeException extends common_1.HttpException {
    constructor() {
        super('No such abrasion type', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.NoSuchAbrasionTypeException = NoSuchAbrasionTypeException;
//# sourceMappingURL=no-such-abrasion-type.exception.js.map