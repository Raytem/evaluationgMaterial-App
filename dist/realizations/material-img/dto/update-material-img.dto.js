"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMaterialImgDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_material_img_dto_1 = require("./create-material-img.dto");
class UpdateMaterialImgDto extends (0, mapped_types_1.PartialType)(create_material_img_dto_1.CreateMaterialImgDto) {
}
exports.UpdateMaterialImgDto = UpdateMaterialImgDto;
//# sourceMappingURL=update-material-img.dto.js.map