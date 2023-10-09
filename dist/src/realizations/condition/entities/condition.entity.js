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
exports.ConditionEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const abrasion_type_entity_1 = require("../../abrasion-type/entities/abrasion-type.entity");
const abstract_base_entity_1 = require("../../abstract-base-entity");
const bending_type_entity_1 = require("../../bending-type/entities/bending-type.entity");
const material_entity_1 = require("../../material/entities/material.entity");
const physical_activity_type_entity_1 = require("../../physical-activity-type/entities/physical-activity-type.entity");
const washing_entity_1 = require("../../washing/entities/washing.entity");
const typeorm_1 = require("typeorm");
let ConditionEntity = class ConditionEntity extends abstract_base_entity_1.AbstractBaseEntity {
};
exports.ConditionEntity = ConditionEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    (0, class_validator_1.IsBoolean)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], ConditionEntity.prototype, "isPositive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, class_validator_1.IsNumber)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ConditionEntity.prototype, "minAirTemp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, class_validator_1.IsNumber)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ConditionEntity.prototype, "maxAirHumidity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, class_validator_1.IsNumber)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ConditionEntity.prototype, "avgAirSpeed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, class_validator_1.IsNumber)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ConditionEntity.prototype, "residenceTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(180),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ConditionEntity.prototype, "torsionAngle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ConditionEntity.prototype, "stretchingCompression", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => material_entity_1.MaterialEntity, (material) => material.condition, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'material_id' }),
    __metadata("design:type", material_entity_1.MaterialEntity)
], ConditionEntity.prototype, "material", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => abrasion_type_entity_1.AbrasionTypeEntity }),
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.ManyToOne)(() => abrasion_type_entity_1.AbrasionTypeEntity, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'abrasionType_id' }),
    __metadata("design:type", abrasion_type_entity_1.AbrasionTypeEntity)
], ConditionEntity.prototype, "abrasionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => washing_entity_1.WashingEntity }),
    (0, typeorm_1.OneToOne)(() => washing_entity_1.WashingEntity, (washing) => washing.condition, {
        eager: true,
    }),
    __metadata("design:type", washing_entity_1.WashingEntity)
], ConditionEntity.prototype, "washing", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => bending_type_entity_1.BendingTypeEntity }),
    (0, typeorm_1.ManyToOne)(() => bending_type_entity_1.BendingTypeEntity, (bendingType) => bendingType.conditions, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'bendingType_id' }),
    __metadata("design:type", bending_type_entity_1.BendingTypeEntity)
], ConditionEntity.prototype, "bendingType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => physical_activity_type_entity_1.PhysicalActivityTypeEntity }),
    (0, typeorm_1.ManyToOne)(() => physical_activity_type_entity_1.PhysicalActivityTypeEntity, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'physicalActivityType_id' }),
    __metadata("design:type", physical_activity_type_entity_1.PhysicalActivityTypeEntity)
], ConditionEntity.prototype, "physicalActivityType", void 0);
exports.ConditionEntity = ConditionEntity = __decorate([
    (0, typeorm_1.Entity)('Condition')
], ConditionEntity);
//# sourceMappingURL=condition.entity.js.map