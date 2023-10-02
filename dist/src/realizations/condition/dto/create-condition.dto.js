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
exports.CreateConditionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const condition_entity_1 = require("../entities/condition.entity");
const create_washing_dto_1 = require("../../washing/dto/create-washing.dto");
const class_transformer_1 = require("class-transformer");
class CreateConditionDto extends (0, swagger_1.OmitType)(condition_entity_1.ConditionEntity, [
    'id',
    'material',
    'washing',
    'bendingType',
    'abrasionType',
    'physicalActivityType',
]) {
}
exports.CreateConditionDto = CreateConditionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => create_washing_dto_1.CreateWashingDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_washing_dto_1.CreateWashingDto),
    __metadata("design:type", create_washing_dto_1.CreateWashingDto)
], CreateConditionDto.prototype, "washing", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, minimum: 1 }),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConditionDto.prototype, "bendingType_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, minimum: 1 }),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConditionDto.prototype, "abrasionType_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, minimum: 1 }),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConditionDto.prototype, "physicalActivityType_id", void 0);
//# sourceMappingURL=create-condition.dto.js.map