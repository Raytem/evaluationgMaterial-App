"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConditionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_condition_dto_1 = require("./create-condition.dto");
class UpdateConditionDto extends (0, swagger_1.PartialType)(create_condition_dto_1.CreateConditionDto) {
}
exports.UpdateConditionDto = UpdateConditionDto;
//# sourceMappingURL=update-condition.dto.js.map