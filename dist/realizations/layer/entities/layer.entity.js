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
exports.LayerEntity = void 0;
const abstract_base_entity_1 = require("../../abstract-base-entity");
const layer_type_entity_1 = require("../../layer-type/entities/layer-type.entity");
const material_entity_1 = require("../../material/entities/material.entity");
const typeorm_1 = require("typeorm");
let LayerEntity = class LayerEntity extends abstract_base_entity_1.AbstractBaseEntity {
};
exports.LayerEntity = LayerEntity;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LayerEntity.prototype, "indexNum", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => layer_type_entity_1.LayerTypeEntity, (layerType) => layerType.layers, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'layerType_id' }),
    __metadata("design:type", layer_type_entity_1.LayerTypeEntity)
], LayerEntity.prototype, "layerType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => material_entity_1.MaterialEntity, (material) => material.layers, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'material_id' }),
    __metadata("design:type", material_entity_1.MaterialEntity)
], LayerEntity.prototype, "material", void 0);
exports.LayerEntity = LayerEntity = __decorate([
    (0, typeorm_1.Entity)('Layer')
], LayerEntity);
//# sourceMappingURL=layer.entity.js.map