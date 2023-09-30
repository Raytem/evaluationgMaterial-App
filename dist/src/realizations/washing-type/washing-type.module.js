"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WashingTypeModule = void 0;
const common_1 = require("@nestjs/common");
const washing_type_service_1 = require("./washing-type.service");
const washing_type_controller_1 = require("./washing-type.controller");
const pagination_module_1 = require("../../services/pagination/pagination.module");
const typeorm_1 = require("@nestjs/typeorm");
const washing_type_entity_1 = require("./entities/washing-type.entity");
const pagination_service_1 = require("../../services/pagination/pagination.service");
let WashingTypeModule = class WashingTypeModule {
};
exports.WashingTypeModule = WashingTypeModule;
exports.WashingTypeModule = WashingTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [pagination_module_1.PaginationModule, typeorm_1.TypeOrmModule.forFeature([washing_type_entity_1.WashingTypeEntity])],
        controllers: [washing_type_controller_1.WashingTypeController],
        providers: [washing_type_service_1.WashingTypeService, pagination_service_1.PaginationService],
        exports: [washing_type_service_1.WashingTypeService],
    })
], WashingTypeModule);
//# sourceMappingURL=washing-type.module.js.map