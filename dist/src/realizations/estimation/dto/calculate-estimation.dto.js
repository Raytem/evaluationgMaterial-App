"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateEstimationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const estimation_entity_1 = require("../entities/estimation.entity");
class CalculateEstimationDto extends (0, swagger_1.PickType)(estimation_entity_1.EstimationEntity, [
    'waterproofFunction_weight',
    'homeostasisFunction_weight',
    'reliabilityFunction_weight',
]) {
}
exports.CalculateEstimationDto = CalculateEstimationDto;
//# sourceMappingURL=calculate-estimation.dto.js.map