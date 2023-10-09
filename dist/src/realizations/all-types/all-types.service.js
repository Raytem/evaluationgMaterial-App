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
exports.AllTypesService = void 0;
const common_1 = require("@nestjs/common");
const abrasion_type_service_1 = require("../abrasion-type/abrasion-type.service");
const bending_type_service_1 = require("../bending-type/bending-type.service");
const glue_type_service_1 = require("../glue-type/glue-type.service");
const layer_type_service_1 = require("../layer-type/layer-type.service");
const membrane_layer_polymer_type_service_1 = require("../membrane-layer-polymer-type/membrane-layer-polymer-type.service");
const physical_activity_type_service_1 = require("../physical-activity-type/physical-activity-type.service");
const production_method_service_1 = require("../production-method/production-method.service");
const washing_type_service_1 = require("../washing-type/washing-type.service");
let AllTypesService = class AllTypesService {
    constructor(abrasionTypeService, bendingTypeService, glueTypeService, layerTypeService, membraneLayerPolymerTypeService, physicalActivityTypeService, productionMethodService, washingTypeService) {
        this.abrasionTypeService = abrasionTypeService;
        this.bendingTypeService = bendingTypeService;
        this.glueTypeService = glueTypeService;
        this.layerTypeService = layerTypeService;
        this.membraneLayerPolymerTypeService = membraneLayerPolymerTypeService;
        this.physicalActivityTypeService = physicalActivityTypeService;
        this.productionMethodService = productionMethodService;
        this.washingTypeService = washingTypeService;
    }
    async findAll() {
        const allTypes = {
            abrasionTypes: await this.abrasionTypeService.findAll(),
            bendingTypes: await this.bendingTypeService.findAll(),
            glueTypes: await this.glueTypeService.findAll(),
            layerTypes: await this.layerTypeService.findAll(),
            membraneLayerPolymerTypes: await this.membraneLayerPolymerTypeService.findAll(),
            physicalActivityTypes: await this.physicalActivityTypeService.findAll(),
            productionMethods: await this.productionMethodService.findAll(),
            washingTypes: await this.washingTypeService.findAll(),
        };
        return allTypes;
    }
};
exports.AllTypesService = AllTypesService;
exports.AllTypesService = AllTypesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [abrasion_type_service_1.AbrasionTypeService,
        bending_type_service_1.BendingTypeService,
        glue_type_service_1.GlueTypeService,
        layer_type_service_1.LayerTypeService,
        membrane_layer_polymer_type_service_1.MembraneLayerPolymerTypeService,
        physical_activity_type_service_1.PhysicalActivityTypeService,
        production_method_service_1.ProductionMethodService,
        washing_type_service_1.WashingTypeService])
], AllTypesService);
//# sourceMappingURL=all-types.service.js.map