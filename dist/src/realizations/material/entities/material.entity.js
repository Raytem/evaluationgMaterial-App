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
exports.MaterialEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const abstract_base_entity_1 = require("../../abstract-base-entity");
const condition_entity_1 = require("../../condition/entities/condition.entity");
const estimation_entity_1 = require("../../estimation/entities/estimation.entity");
const glue_type_entity_1 = require("../../glue-type/entities/glue-type.entity");
const homeostasis_function_entity_1 = require("../../homeostasis-function/entities/homeostasis-function.entity");
const image_entity_1 = require("../../image/entities/image.entity");
const layer_entity_1 = require("../../layer/entities/layer.entity");
const membrane_layer_polymer_type_entity_1 = require("../../membrane-layer-polymer-type/entities/membrane-layer-polymer-type.entity");
const production_method_entity_1 = require("../../production-method/entities/production-method.entity");
const reliability_function_entity_1 = require("../../reliability-function/entities/reliability-function.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const waterproof_function_entity_1 = require("../../waterproof-function/entities/waterproof-function.entity");
const typeorm_1 = require("typeorm");
let MaterialEntity = class MaterialEntity extends abstract_base_entity_1.AbstractBaseEntity {
};
exports.MaterialEntity = MaterialEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MaterialEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MaterialEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MaterialEntity.prototype, "manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MaterialEntity.prototype, "depth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => condition_entity_1.ConditionEntity }),
    (0, typeorm_1.OneToOne)(() => condition_entity_1.ConditionEntity, (condition) => condition.material, {
        eager: true,
    }),
    __metadata("design:type", condition_entity_1.ConditionEntity)
], MaterialEntity.prototype, "condition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => waterproof_function_entity_1.WaterproofFunctionEntity }),
    (0, typeorm_1.OneToOne)(() => waterproof_function_entity_1.WaterproofFunctionEntity, (waterproofFunction) => waterproofFunction.material, { eager: true }),
    __metadata("design:type", waterproof_function_entity_1.WaterproofFunctionEntity)
], MaterialEntity.prototype, "waterproofFunction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => homeostasis_function_entity_1.HomeostasisFunctionEntity }),
    (0, typeorm_1.OneToOne)(() => homeostasis_function_entity_1.HomeostasisFunctionEntity, (homeostasisFunction) => homeostasisFunction.material, { eager: true }),
    __metadata("design:type", homeostasis_function_entity_1.HomeostasisFunctionEntity)
], MaterialEntity.prototype, "homeostasisFunction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => reliability_function_entity_1.ReliabilityFunctionEntity }),
    (0, typeorm_1.OneToOne)(() => reliability_function_entity_1.ReliabilityFunctionEntity, (reliabilityFunction) => reliabilityFunction.material, { eager: true }),
    __metadata("design:type", reliability_function_entity_1.ReliabilityFunctionEntity)
], MaterialEntity.prototype, "reliabilityFunction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => estimation_entity_1.EstimationEntity }),
    (0, typeorm_1.OneToOne)(() => estimation_entity_1.EstimationEntity, (estimation) => estimation.material, {
        eager: true,
    }),
    __metadata("design:type", estimation_entity_1.EstimationEntity)
], MaterialEntity.prototype, "estimation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => layer_entity_1.LayerEntity, isArray: true }),
    (0, typeorm_1.OneToMany)(() => layer_entity_1.LayerEntity, (layer) => layer.material, { eager: true }),
    __metadata("design:type", Array)
], MaterialEntity.prototype, "layers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => String, isArray: true }),
    (0, typeorm_1.OneToMany)(() => image_entity_1.ImageEntity, (image) => image.material, { eager: true }),
    (0, class_transformer_1.Transform)(({ value }) => {
        return value.map((imageEntity) => imageEntity.webContentLink);
    }),
    __metadata("design:type", Array)
], MaterialEntity.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.materials),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], MaterialEntity.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => production_method_entity_1.ProductionMethodEntity }),
    (0, typeorm_1.ManyToOne)(() => production_method_entity_1.ProductionMethodEntity, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'productionMethod_id' }),
    __metadata("design:type", production_method_entity_1.ProductionMethodEntity)
], MaterialEntity.prototype, "productionMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => membrane_layer_polymer_type_entity_1.MembraneLayerPolymerTypeEntity }),
    (0, typeorm_1.ManyToOne)(() => membrane_layer_polymer_type_entity_1.MembraneLayerPolymerTypeEntity, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'membraneLayerPolymerType_id' }),
    __metadata("design:type", membrane_layer_polymer_type_entity_1.MembraneLayerPolymerTypeEntity)
], MaterialEntity.prototype, "membraneLayerPolymerType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => glue_type_entity_1.GlueTypeEntity }),
    (0, typeorm_1.ManyToOne)(() => glue_type_entity_1.GlueTypeEntity, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'glueType_id' }),
    __metadata("design:type", glue_type_entity_1.GlueTypeEntity)
], MaterialEntity.prototype, "glueType", void 0);
exports.MaterialEntity = MaterialEntity = __decorate([
    (0, typeorm_1.Entity)('Material')
], MaterialEntity);
//# sourceMappingURL=material.entity.js.map