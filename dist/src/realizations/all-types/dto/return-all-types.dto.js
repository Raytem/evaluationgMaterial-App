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
exports.ReturnAllTypesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const abrasion_type_entity_1 = require("../../abrasion-type/entities/abrasion-type.entity");
const bending_type_entity_1 = require("../../bending-type/entities/bending-type.entity");
const glue_type_entity_1 = require("../../glue-type/entities/glue-type.entity");
const layer_type_entity_1 = require("../../layer-type/entities/layer-type.entity");
const membrane_layer_polymer_type_entity_1 = require("../../membrane-layer-polymer-type/entities/membrane-layer-polymer-type.entity");
const physical_activity_type_entity_1 = require("../../physical-activity-type/entities/physical-activity-type.entity");
const production_method_entity_1 = require("../../production-method/entities/production-method.entity");
const washing_type_entity_1 = require("../../washing-type/entities/washing-type.entity");
class ReturnAllTypesDto {
}
exports.ReturnAllTypesDto = ReturnAllTypesDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => abrasion_type_entity_1.AbrasionTypeEntity, isArray: true }),
    __metadata("design:type", Array)
], ReturnAllTypesDto.prototype, "abrasionTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => bending_type_entity_1.BendingTypeEntity, isArray: true }),
    __metadata("design:type", Array)
], ReturnAllTypesDto.prototype, "bendingTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => glue_type_entity_1.GlueTypeEntity, isArray: true }),
    __metadata("design:type", Array)
], ReturnAllTypesDto.prototype, "glueTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => layer_type_entity_1.LayerTypeEntity, isArray: true }),
    __metadata("design:type", Array)
], ReturnAllTypesDto.prototype, "layerTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => membrane_layer_polymer_type_entity_1.MembraneLayerPolymerTypeEntity, isArray: true }),
    __metadata("design:type", Array)
], ReturnAllTypesDto.prototype, "membraneLayerPolymerTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => physical_activity_type_entity_1.PhysicalActivityTypeEntity, isArray: true }),
    __metadata("design:type", Array)
], ReturnAllTypesDto.prototype, "physicalActivityTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => production_method_entity_1.ProductionMethodEntity, isArray: true }),
    __metadata("design:type", Array)
], ReturnAllTypesDto.prototype, "productionMethods", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => washing_type_entity_1.WashingTypeEntity, isArray: true }),
    __metadata("design:type", Array)
], ReturnAllTypesDto.prototype, "washingTypes", void 0);
//# sourceMappingURL=return-all-types.dto.js.map