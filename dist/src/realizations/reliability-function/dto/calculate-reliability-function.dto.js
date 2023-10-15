"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateReliabilityFunctionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const reliability_function_entity_1 = require("../entities/reliability-function.entity");
class CalculateReliabilityFunctionDto extends (0, swagger_1.OmitType)(reliability_function_entity_1.ReliabilityFunctionEntity, [
    'id',
    'material',
    'relativeBlottingPressureAfterLoad_relativeValuation',
    'relativeWaterResistanceAfterLoad_relativeValuation',
    'relativeBlottingTimeAfterLoad_relativeValuation',
    'waterproofRealizationCriteriaAfterLoad_calculated',
    'waterproofRealizationCriteriaAfterLoad_base',
    'waterproofRealizationCriteriaAfterLoad_relativeValuation',
    'waterproofFunctionResource_experimental_1',
    'waterproofFunctionResource_experimental_2',
    'waterproofFunctionResource_calculated',
    'waterproofFunctionResource_relativeValuation',
    'comment',
    'avgWeightedEstimate',
]) {
}
exports.CalculateReliabilityFunctionDto = CalculateReliabilityFunctionDto;
//# sourceMappingURL=calculate-reliability-function.dto.js.map