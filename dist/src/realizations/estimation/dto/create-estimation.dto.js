"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEstimationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const estimation_entity_1 = require("../entities/estimation.entity");
class CreateEstimationDto extends (0, swagger_1.OmitType)(estimation_entity_1.EstimationEntity, ['id']) {
}
exports.CreateEstimationDto = CreateEstimationDto;
//# sourceMappingURL=create-estimation.dto.js.map