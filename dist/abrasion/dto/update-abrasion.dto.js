"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAbrasionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_abrasion_dto_1 = require("./create-abrasion.dto");
class UpdateAbrasionDto extends (0, mapped_types_1.PartialType)(create_abrasion_dto_1.CreateAbrasionDto) {
}
exports.UpdateAbrasionDto = UpdateAbrasionDto;
//# sourceMappingURL=update-abrasion.dto.js.map