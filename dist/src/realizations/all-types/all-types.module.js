"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllTypesModule = void 0;
const common_1 = require("@nestjs/common");
const all_types_service_1 = require("./all-types.service");
const all_types_controller_1 = require("./all-types.controller");
const abrasion_type_module_1 = require("../abrasion-type/abrasion-type.module");
const bending_type_module_1 = require("../bending-type/bending-type.module");
const glue_type_module_1 = require("../glue-type/glue-type.module");
const layer_type_module_1 = require("../layer-type/layer-type.module");
const membrane_layer_polymer_type_module_1 = require("../membrane-layer-polymer-type/membrane-layer-polymer-type.module");
const physical_activity_type_module_1 = require("../physical-activity-type/physical-activity-type.module");
const production_method_module_1 = require("../production-method/production-method.module");
const washing_type_module_1 = require("../washing-type/washing-type.module");
let AllTypesModule = class AllTypesModule {
};
exports.AllTypesModule = AllTypesModule;
exports.AllTypesModule = AllTypesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            abrasion_type_module_1.AbrasionTypeModule,
            bending_type_module_1.BendingTypeModule,
            glue_type_module_1.GlueTypeModule,
            layer_type_module_1.LayerTypeModule,
            membrane_layer_polymer_type_module_1.MembraneLayerPolymerTypeModule,
            physical_activity_type_module_1.PhysicalActivityTypeModule,
            production_method_module_1.ProductionMethodModule,
            washing_type_module_1.WashingTypeModule,
        ],
        controllers: [all_types_controller_1.AllTypesController],
        providers: [all_types_service_1.AllTypesService],
    })
], AllTypesModule);
//# sourceMappingURL=all-types.module.js.map