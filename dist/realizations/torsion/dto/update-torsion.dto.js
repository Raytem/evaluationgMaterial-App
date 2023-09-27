"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTorsionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_torsion_dto_1 = require("./create-torsion.dto");
class UpdateTorsionDto extends (0, mapped_types_1.PartialType)(create_torsion_dto_1.CreateTorsionDto) {
}
exports.UpdateTorsionDto = UpdateTorsionDto;
//# sourceMappingURL=update-torsion.dto.js.map