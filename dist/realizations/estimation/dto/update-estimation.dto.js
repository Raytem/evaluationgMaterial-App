"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEstimationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_estimation_dto_1 = require("./create-estimation.dto");
class UpdateEstimationDto extends (0, mapped_types_1.PartialType)(create_estimation_dto_1.CreateEstimationDto) {
}
exports.UpdateEstimationDto = UpdateEstimationDto;
//# sourceMappingURL=update-estimation.dto.js.map