"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLayerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_layer_dto_1 = require("./create-layer.dto");
class UpdateLayerDto extends (0, swagger_1.PartialType)(create_layer_dto_1.CreateLayerDto) {
}
exports.UpdateLayerDto = UpdateLayerDto;
//# sourceMappingURL=update-layer.dto.js.map