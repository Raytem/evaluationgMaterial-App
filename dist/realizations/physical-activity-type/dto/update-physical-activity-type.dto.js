"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePhysicalActivityTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_physical_activity_type_dto_1 = require("./create-physical-activity-type.dto");
class UpdatePhysicalActivityTypeDto extends (0, mapped_types_1.PartialType)(create_physical_activity_type_dto_1.CreatePhysicalActivityTypeDto) {
}
exports.UpdatePhysicalActivityTypeDto = UpdatePhysicalActivityTypeDto;
//# sourceMappingURL=update-physical-activity-type.dto.js.map