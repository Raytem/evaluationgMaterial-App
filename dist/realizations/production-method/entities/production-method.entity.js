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
exports.ProductionMethodEntity = void 0;
const abstract_base_entity_1 = require("../../abstract-base-entity");
const material_entity_1 = require("../../material/entities/material.entity");
const typeorm_1 = require("typeorm");
let ProductionMethodEntity = class ProductionMethodEntity extends abstract_base_entity_1.AbstractBaseEntity {
};
exports.ProductionMethodEntity = ProductionMethodEntity;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductionMethodEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => material_entity_1.MaterialEntity, (material) => material.productionMethod),
    __metadata("design:type", material_entity_1.MaterialEntity)
], ProductionMethodEntity.prototype, "material", void 0);
exports.ProductionMethodEntity = ProductionMethodEntity = __decorate([
    (0, typeorm_1.Entity)('ProductionMethod')
], ProductionMethodEntity);
//# sourceMappingURL=production-method.entity.js.map