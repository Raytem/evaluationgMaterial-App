"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerModule = void 0;
const common_1 = require("@nestjs/common");
const layer_service_1 = require("./layer.service");
const typeorm_1 = require("@nestjs/typeorm");
const layer_entity_1 = require("./entities/layer.entity");
const layer_type_module_1 = require("../layer-type/layer-type.module");
let LayerModule = class LayerModule {
};
exports.LayerModule = LayerModule;
exports.LayerModule = LayerModule = __decorate([
    (0, common_1.Module)({
        imports: [layer_type_module_1.LayerTypeModule, typeorm_1.TypeOrmModule.forFeature([layer_entity_1.LayerEntity])],
        providers: [layer_service_1.LayerService],
        exports: [layer_service_1.LayerService],
    })
], LayerModule);
//# sourceMappingURL=layer.module.js.map