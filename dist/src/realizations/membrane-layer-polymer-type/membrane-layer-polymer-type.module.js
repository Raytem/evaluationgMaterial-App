"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembraneLayerPolymerTypeModule = void 0;
const common_1 = require("@nestjs/common");
const membrane_layer_polymer_type_service_1 = require("./membrane-layer-polymer-type.service");
const membrane_layer_polymer_type_controller_1 = require("./membrane-layer-polymer-type.controller");
const membrane_layer_polymer_type_entity_1 = require("./entities/membrane-layer-polymer-type.entity");
const pagination_module_1 = require("../../services/pagination/pagination.module");
const typeorm_1 = require("@nestjs/typeorm");
const pagination_service_1 = require("../../services/pagination/pagination.service");
let MembraneLayerPolymerTypeModule = class MembraneLayerPolymerTypeModule {
};
exports.MembraneLayerPolymerTypeModule = MembraneLayerPolymerTypeModule;
exports.MembraneLayerPolymerTypeModule = MembraneLayerPolymerTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            pagination_module_1.PaginationModule,
            typeorm_1.TypeOrmModule.forFeature([membrane_layer_polymer_type_entity_1.MembraneLayerPolymerTypeEntity]),
        ],
        controllers: [membrane_layer_polymer_type_controller_1.MembraneLayerPolymerTypeController],
        providers: [membrane_layer_polymer_type_service_1.MembraneLayerPolymerTypeService, pagination_service_1.PaginationService],
        exports: [membrane_layer_polymer_type_service_1.MembraneLayerPolymerTypeService],
    })
], MembraneLayerPolymerTypeModule);
//# sourceMappingURL=membrane-layer-polymer-type.module.js.map