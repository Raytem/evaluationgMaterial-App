"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitiesReferException = void 0;
const common_1 = require("@nestjs/common");
class EntitiesReferException extends common_1.HttpException {
    constructor(entityName) {
        super(`Some entities refer to this ${entityName}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
exports.EntitiesReferException = EntitiesReferException;
//# sourceMappingURL=entities-refer.exception.js.map