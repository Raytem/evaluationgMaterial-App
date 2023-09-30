"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReliabilityFunctionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const reliability_function_entity_1 = require("../entities/reliability-function.entity");
class CreateReliabilityFunctionDto extends (0, swagger_1.OmitType)(reliability_function_entity_1.ReliabilityFunctionEntity, ['id']) {
}
exports.CreateReliabilityFunctionDto = CreateReliabilityFunctionDto;
//# sourceMappingURL=create-reliability-function.dto.js.map