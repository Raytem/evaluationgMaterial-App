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
exports.MaterialInfoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_layer_dto_1 = require("../../layer/dto/create-layer.dto");
class MaterialInfoDto {
}
exports.MaterialInfoDto = MaterialInfoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MaterialInfoDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MaterialInfoDto.prototype, "manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MaterialInfoDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MaterialInfoDto.prototype, "depth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, minimum: 1 }),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MaterialInfoDto.prototype, "productionMethod_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, minimum: 1 }),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MaterialInfoDto.prototype, "membraneLayerPolymerType_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, minimum: 1 }),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MaterialInfoDto.prototype, "glueType_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => create_layer_dto_1.CreateLayerDto, isArray: true }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_layer_dto_1.CreateLayerDto),
    __metadata("design:type", Array)
], MaterialInfoDto.prototype, "layers", void 0);
//# sourceMappingURL=material-info.dto.js.map