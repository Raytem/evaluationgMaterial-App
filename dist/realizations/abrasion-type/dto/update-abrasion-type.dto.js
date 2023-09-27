"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAbrasionTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_abrasion_type_dto_1 = require("./create-abrasion-type.dto");
class UpdateAbrasionTypeDto extends (0, mapped_types_1.PartialType)(create_abrasion_type_dto_1.CreateAbrasionTypeDto) {
}
exports.UpdateAbrasionTypeDto = UpdateAbrasionTypeDto;
//# sourceMappingURL=update-abrasion-type.dto.js.map