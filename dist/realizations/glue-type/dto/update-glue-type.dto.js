"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGlueTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_glue_type_dto_1 = require("./create-glue-type.dto");
class UpdateGlueTypeDto extends (0, mapped_types_1.PartialType)(create_glue_type_dto_1.CreateGlueTypeDto) {
}
exports.UpdateGlueTypeDto = UpdateGlueTypeDto;
//# sourceMappingURL=update-glue-type.dto.js.map