"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateHomeostasisFunctionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const homeostasis_function_entity_1 = require("../entities/homeostasis-function.entity");
class CalculateHomeostasisFunctionDto extends (0, swagger_1.OmitType)(homeostasis_function_entity_1.HomeostasisFunctionEntity, [
    'id',
    'material',
    'waterPermeability_calculated',
    'waterPermeabilityDynamicCriteria_calculated',
    'totalThermalResistance_calculated',
    'waterPermeability_relativeValuation',
    'waterPermeabilityDynamicCriteria_relativeValuation',
    'totalThermalResistance_relativeValuation',
    'minPressureDiff',
    'maxPressureDiff',
    'estimatedPressureDiff',
    'avgRangePressureVal',
    'comfTempInsideClothes',
    'comfHumidityInsideClothes',
    'minOutdoorTemp',
    'minOutdoorHumidity',
    'maxOutdoorTemp',
    'maxOutdoorHumidity',
    'avgOutdoorAirSpeed',
    'comment',
    'avgWeightedEstimate',
]) {
}
exports.CalculateHomeostasisFunctionDto = CalculateHomeostasisFunctionDto;
//# sourceMappingURL=calculate-homeostasis-function.dto.js.map