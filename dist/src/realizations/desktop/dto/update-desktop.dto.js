"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDesktopDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_desktop_dto_1 = require("./create-desktop.dto");
class UpdateDesktopDto extends (0, mapped_types_1.PartialType)(create_desktop_dto_1.CreateDesktopDto) {
}
exports.UpdateDesktopDto = UpdateDesktopDto;
//# sourceMappingURL=update-desktop.dto.js.map