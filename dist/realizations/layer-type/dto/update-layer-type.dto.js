"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLayerTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_layer_type_dto_1 = require("./create-layer-type.dto");
class UpdateLayerTypeDto extends (0, mapped_types_1.PartialType)(create_layer_type_dto_1.CreateLayerTypeDto) {
}
exports.UpdateLayerTypeDto = UpdateLayerTypeDto;
//# sourceMappingURL=update-layer-type.dto.js.map