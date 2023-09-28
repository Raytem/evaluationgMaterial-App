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
exports.HomeostasisFunctionEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const abstract_base_entity_1 = require("../../abstract-base-entity");
const material_entity_1 = require("../../material/entities/material.entity");
const typeorm_1 = require("typeorm");
let HomeostasisFunctionEntity = class HomeostasisFunctionEntity extends abstract_base_entity_1.AbstractBaseEntity {
};
exports.HomeostasisFunctionEntity = HomeostasisFunctionEntity;
__decorate([
    (0, typeorm_1.OneToOne)(() => material_entity_1.MaterialEntity, (material) => material.homeostasisFunction, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'material_id' }),
    __metadata("design:type", material_entity_1.MaterialEntity)
], HomeostasisFunctionEntity.prototype, "material", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "m1s", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "m2s", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "s0_1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "t_1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "waterPermeability_calculated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "waterPermeability_relativeValuation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "waterPermeability_base", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "waterPermeability_weight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "m1min", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "m2min", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "m1max", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "m2max", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "s0_2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "t_2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "waterPermeabilityDynamicCriteria_calculated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "waterPermeabilityDynamicCriteria_relativeValuation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "waterPermeabilityDynamicCriteria_base", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "waterPermeabilityDynamicCriteria_weight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "t0s", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "s", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "m", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "totalThermalResistance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "totalThermalResistance_calculated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "totalThermalResistance_base", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "totalThermalResistance_relativeValuation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "totalThermalResistance_weight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "minPressureDiff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "maxPressureDiff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "estimatedPressureDiff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "avgRangePressureVal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "comfTempInsideClothes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "comfHumidityInsideClothes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "minOutdoorTemp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "maxOutdoorTemp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "minOutdoorHumidity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "maxOutdoorHumidity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "avgOutdoorAirSpeed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HomeostasisFunctionEntity.prototype, "equipment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HomeostasisFunctionEntity.prototype, "comment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HomeostasisFunctionEntity.prototype, "avgWeightedEstimate", void 0);
exports.HomeostasisFunctionEntity = HomeostasisFunctionEntity = __decorate([
    (0, typeorm_1.Entity)('HomeostasisFunction')
], HomeostasisFunctionEntity);
//# sourceMappingURL=homeostasis-function.entity.js.map