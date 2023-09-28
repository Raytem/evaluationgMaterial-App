"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWashingDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_washing_dto_1 = require("./create-washing.dto");
class UpdateWashingDto extends (0, swagger_1.PartialType)(create_washing_dto_1.CreateWashingDto) {
}
exports.UpdateWashingDto = UpdateWashingDto;
//# sourceMappingURL=update-washing.dto.js.map