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
exports.WaterproofFunctionEntity = void 0;
const abstract_base_entity_1 = require("../../abstract-base-entity");
const material_entity_1 = require("../../material/entities/material.entity");
const typeorm_1 = require("typeorm");
let WaterproofFunctionEntity = class WaterproofFunctionEntity extends abstract_base_entity_1.AbstractBaseEntity {
};
exports.WaterproofFunctionEntity = WaterproofFunctionEntity;
__decorate([
    (0, typeorm_1.OneToOne)(() => material_entity_1.MaterialEntity, (material) => material.waterproofFunction, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", material_entity_1.MaterialEntity)
], WaterproofFunctionEntity.prototype, "material", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "materialBlottingPressure_experimental_1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "materialBlottingPressure_calculated", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "materialBlottingPressure_base", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "materialBlottingPressure_relativeValuation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "materialBlottingPressure_weight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "waterproof_experimental_1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "waterproof_calculated", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "waterproof_base", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "waterproof_relativeValuation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "waterproof_weight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "materialBlottingTime_experimental_1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "materialBlottingTime_calculated", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "materialBlottingTime_base", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "materialBlottingTime_relativeValuation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "materialBlottingTime_weight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "waterproofRealizationCriteria_experimental_1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "waterproofRealizationCriteria_experimental_2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "waterproofRealizationCriteria_calculated", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "waterproofRealizationCriteria_base", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "waterproofRealizationCriteria_relativeValuation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "waterproofRealizationCriteria_weight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "dynamicWaterproofCriteria_experimental_1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "dynamicWaterproofCriteria_experimental_2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "dynamicWaterproofCriteria_experimental_3", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "dynamicWaterproofCriteria_experimental_4", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "dynamicWaterproofCriteria_calculated", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "dynamicWaterproofCriteria_base", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "dynamicWaterproofCriteria_relativeValuation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "dynamicWaterproofCriteria_weight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "hydrostaticPressureIncreaseSpeedMin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "hydrostaticPressure", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "waterproofTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WaterproofFunctionEntity.prototype, "equipment", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WaterproofFunctionEntity.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WaterproofFunctionEntity.prototype, "avgWeightedEstimate", void 0);
exports.WaterproofFunctionEntity = WaterproofFunctionEntity = __decorate([
    (0, typeorm_1.Entity)('WaterproofFunction')
], WaterproofFunctionEntity);
//# sourceMappingURL=waterproof-function.entity.js.map