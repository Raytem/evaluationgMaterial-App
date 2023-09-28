"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLayerTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_layer_type_dto_1 = require("./create-layer-type.dto");
class UpdateLayerTypeDto extends (0, swagger_1.PartialType)(create_layer_type_dto_1.CreateLayerTypeDto) {
}
exports.UpdateLayerTypeDto = UpdateLayerTypeDto;
//# sourceMappingURL=update-layer-type.dto.js.map