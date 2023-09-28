"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductionMethodModule = void 0;
const common_1 = require("@nestjs/common");
const production_method_service_1 = require("./production-method.service");
const production_method_controller_1 = require("./production-method.controller");
const pagination_service_1 = require("../../pagination/pagination.service");
const pagination_module_1 = require("../../pagination/pagination.module");
const typeorm_1 = require("@nestjs/typeorm");
const production_method_entity_1 = require("./entities/production-method.entity");
let ProductionMethodModule = class ProductionMethodModule {
};
exports.ProductionMethodModule = ProductionMethodModule;
exports.ProductionMethodModule = ProductionMethodModule = __decorate([
    (0, common_1.Module)({
        imports: [
            pagination_module_1.PaginationModule,
            typeorm_1.TypeOrmModule.forFeature([production_method_entity_1.ProductionMethodEntity]),
        ],
        controllers: [production_method_controller_1.ProductionMethodController],
        providers: [production_method_service_1.ProductionMethodService, pagination_service_1.PaginationService],
    })
], ProductionMethodModule);
//# sourceMappingURL=production-method.module.js.map