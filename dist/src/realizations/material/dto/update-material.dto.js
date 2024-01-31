"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMaterialDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const material_info_dto_1 = require("./material-info.dto");
class UpdateMaterialDto extends (0, swagger_1.PartialType)((0, swagger_1.PickType)(material_info_dto_1.MaterialInfoDto, ['name', 'description', 'manufacturer'])) {
}
exports.UpdateMaterialDto = UpdateMaterialDto;
//# sourceMappingURL=update-material.dto.js.map