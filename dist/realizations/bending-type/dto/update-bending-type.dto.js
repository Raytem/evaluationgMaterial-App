"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBendingTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bending_type_dto_1 = require("./create-bending-type.dto");
class UpdateBendingTypeDto extends (0, mapped_types_1.PartialType)(create_bending_type_dto_1.CreateBendingTypeDto) {
}
exports.UpdateBendingTypeDto = UpdateBendingTypeDto;
//# sourceMappingURL=update-bending-type.dto.js.map