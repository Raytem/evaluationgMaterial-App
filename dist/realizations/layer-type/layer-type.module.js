"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerTypeModule = void 0;
const common_1 = require("@nestjs/common");
const layer_type_service_1 = require("./layer-type.service");
const layer_type_controller_1 = require("./layer-type.controller");
const typeorm_1 = require("@nestjs/typeorm");
const pagination_module_1 = require("../../pagination/pagination.module");
const layer_type_entity_1 = require("./entities/layer-type.entity");
const pagination_service_1 = require("../../pagination/pagination.service");
let LayerTypeModule = class LayerTypeModule {
};
exports.LayerTypeModule = LayerTypeModule;
exports.LayerTypeModule = LayerTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [pagination_module_1.PaginationModule, typeorm_1.TypeOrmModule.forFeature([layer_type_entity_1.LayerTypeEntity])],
        controllers: [layer_type_controller_1.LayerTypeController],
        providers: [layer_type_service_1.LayerTypeService, pagination_service_1.PaginationService],
    })
], LayerTypeModule);
//# sourceMappingURL=layer-type.module.js.map