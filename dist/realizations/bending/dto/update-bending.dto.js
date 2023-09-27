"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBendingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bending_dto_1 = require("./create-bending.dto");
class UpdateBendingDto extends (0, mapped_types_1.PartialType)(create_bending_dto_1.CreateBendingDto) {
}
exports.UpdateBendingDto = UpdateBendingDto;
//# sourceMappingURL=update-bending.dto.js.map