"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbrasionTypeModule = void 0;
const common_1 = require("@nestjs/common");
const abrasion_type_service_1 = require("./abrasion-type.service");
const abrasion_type_controller_1 = require("./abrasion-type.controller");
const typeorm_1 = require("@nestjs/typeorm");
const abrasion_type_entity_1 = require("./entities/abrasion-type.entity");
const pagination_module_1 = require("../../pagination/pagination.module");
const pagination_service_1 = require("../../pagination/pagination.service");
let AbrasionTypeModule = class AbrasionTypeModule {
};
exports.AbrasionTypeModule = AbrasionTypeModule;
exports.AbrasionTypeModule = AbrasionTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [pagination_module_1.PaginationModule, typeorm_1.TypeOrmModule.forFeature([abrasion_type_entity_1.AbrasionTypeEntity])],
        controllers: [abrasion_type_controller_1.AbrasionTypeController],
        providers: [abrasion_type_service_1.AbrasionTypeService, pagination_service_1.PaginationService],
    })
], AbrasionTypeModule);
//# sourceMappingURL=abrasion-type.module.js.map