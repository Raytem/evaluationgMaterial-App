"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHomeostasisFunctionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const homeostasis_function_entity_1 = require("../entities/homeostasis-function.entity");
class CreateHomeostasisFunctionDto extends (0, swagger_1.OmitType)(homeostasis_function_entity_1.HomeostasisFunctionEntity, ['id']) {
}
exports.CreateHomeostasisFunctionDto = CreateHomeostasisFunctionDto;
//# sourceMappingURL=create-homeostasis-function.dto.js.map