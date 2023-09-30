"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateWaterproofFunctionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const waterproof_function_entity_1 = require("../entities/waterproof-function.entity");
class CalculateWaterproofFunctionDto extends (0, swagger_1.OmitType)(waterproof_function_entity_1.WaterproofFunctionEntity, [
    'id',
    'waterproofRealizationCriteria_calculated',
    'dynamicWaterproofCriteria_calculated',
    'materialBlottingPressure_base',
    'waterproof_base',
    'materialBlottingTime_base',
    'waterproofRealizationCriteria_base',
    'dynamicWaterproofCriteria_base',
    'comment',
    'avgWeightedEstimate',
]) {
}
exports.CalculateWaterproofFunctionDto = CalculateWaterproofFunctionDto;
//# sourceMappingURL=calculate-waterproof-function.dto.js.map