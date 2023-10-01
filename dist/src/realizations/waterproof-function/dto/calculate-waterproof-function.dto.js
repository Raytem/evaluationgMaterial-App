"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateWaterproofFunctionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const waterproof_function_entity_1 = require("../entities/waterproof-function.entity");
class CalculateWaterproofFunctionDto extends (0, swagger_1.OmitType)(waterproof_function_entity_1.WaterproofFunctionEntity, [
    'id',
    'waterproofRealizationCriteria_calculated',
    'dynamicWaterproofCriteria_calculated',
    'materialBlottingPressure_relativeValuation',
    'waterproof_relativeValuation',
    'materialBlottingTime_relativeValuation',
    'waterproofRealizationCriteria_relativeValuation',
    'dynamicWaterproofCriteria_relativeValuation',
    'comment',
    'avgWeightedEstimate',
]) {
}
exports.CalculateWaterproofFunctionDto = CalculateWaterproofFunctionDto;
//# sourceMappingURL=calculate-waterproof-function.dto.js.map