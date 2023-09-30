"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWaterproofFunctionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const waterproof_function_entity_1 = require("../entities/waterproof-function.entity");
class CreateWaterproofFunctionDto extends (0, swagger_1.OmitType)(waterproof_function_entity_1.WaterproofFunctionEntity, ['id']) {
}
exports.CreateWaterproofFunctionDto = CreateWaterproofFunctionDto;
//# sourceMappingURL=create-waterproof-function.dto.js.map