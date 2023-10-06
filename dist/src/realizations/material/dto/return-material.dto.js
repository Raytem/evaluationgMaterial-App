"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnMaterialDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const material_info_dto_1 = require("./material-info.dto");
const condition_entity_1 = require("../../condition/entities/condition.entity");
class ReturnMaterialDto extends material_info_dto_1.MaterialInfoDto {
    constructor(materialEntity) {
        super();
        Object.assign(this, materialEntity);
    }
}
exports.ReturnMaterialDto = ReturnMaterialDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => condition_entity_1.ConditionEntity }),
    __metadata("design:type", condition_entity_1.ConditionEntity)
], ReturnMaterialDto.prototype, "condition", void 0);
//# sourceMappingURL=return-material.dto.js.map