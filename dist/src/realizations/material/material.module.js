"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialModule = void 0;
const common_1 = require("@nestjs/common");
const material_service_1 = require("./material.service");
const material_controller_1 = require("./material.controller");
const typeorm_1 = require("@nestjs/typeorm");
const material_entity_1 = require("./entities/material.entity");
const glue_type_module_1 = require("../glue-type/glue-type.module");
const layer_type_module_1 = require("../layer-type/layer-type.module");
const membrane_layer_polymer_type_module_1 = require("../membrane-layer-polymer-type/membrane-layer-polymer-type.module");
const production_method_module_1 = require("../production-method/production-method.module");
const waterproof_function_module_1 = require("../waterproof-function/waterproof-function.module");
const homeostasis_function_module_1 = require("../homeostasis-function/homeostasis-function.module");
const estimation_module_1 = require("../estimation/estimation.module");
const image_module_1 = require("../image/image.module");
const layer_module_1 = require("../layer/layer.module");
const reliability_function_module_1 = require("../reliability-function/reliability-function.module");
const exel_module_1 = require("../../services/exel/exel.module");
const condition_module_1 = require("../condition/condition.module");
const pagination_module_1 = require("../../services/pagination/pagination.module");
const calculation_module_1 = require("../../services/calculation/calculation.module");
let MaterialModule = class MaterialModule {
};
exports.MaterialModule = MaterialModule;
exports.MaterialModule = MaterialModule = __decorate([
    (0, common_1.Module)({
        imports: [
            calculation_module_1.CalculationModule,
            glue_type_module_1.GlueTypeModule,
            layer_type_module_1.LayerTypeModule,
            membrane_layer_polymer_type_module_1.MembraneLayerPolymerTypeModule,
            production_method_module_1.ProductionMethodModule,
            condition_module_1.ConditionModule,
            waterproof_function_module_1.WaterproofFunctionModule,
            homeostasis_function_module_1.HomeostasisFunctionModule,
            reliability_function_module_1.ReliabilityFunctionModule,
            estimation_module_1.EstimationModule,
            image_module_1.ImageModule,
            layer_module_1.LayerModule,
            typeorm_1.TypeOrmModule.forFeature([material_entity_1.MaterialEntity]),
            exel_module_1.ExelModule,
            pagination_module_1.PaginationModule,
        ],
        controllers: [material_controller_1.MaterialController],
        providers: [material_service_1.MaterialService],
    })
], MaterialModule);
//# sourceMappingURL=material.module.js.map