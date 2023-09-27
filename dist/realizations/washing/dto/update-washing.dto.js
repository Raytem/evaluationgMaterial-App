"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWashingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_washing_dto_1 = require("./create-washing.dto");
class UpdateWashingDto extends (0, mapped_types_1.PartialType)(create_washing_dto_1.CreateWashingDto) {
}
exports.UpdateWashingDto = UpdateWashingDto;
//# sourceMappingURL=update-washing.dto.js.map