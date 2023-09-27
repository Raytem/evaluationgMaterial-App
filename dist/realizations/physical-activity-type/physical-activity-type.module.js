"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalActivityTypeModule = void 0;
const common_1 = require("@nestjs/common");
const physical_activity_type_service_1 = require("./physical-activity-type.service");
const physical_activity_type_controller_1 = require("./physical-activity-type.controller");
const pagination_module_1 = require("../../pagination/pagination.module");
const typeorm_1 = require("@nestjs/typeorm");
const physical_activity_type_entity_1 = require("./entities/physical-activity-type.entity");
const pagination_service_1 = require("../../pagination/pagination.service");
let PhysicalActivityTypeModule = class PhysicalActivityTypeModule {
};
exports.PhysicalActivityTypeModule = PhysicalActivityTypeModule;
exports.PhysicalActivityTypeModule = PhysicalActivityTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            pagination_module_1.PaginationModule,
            typeorm_1.TypeOrmModule.forFeature([physical_activity_type_entity_1.PhysicalActivityTypeEntity]),
        ],
        controllers: [physical_activity_type_controller_1.PhysicalActivityTypeController],
        providers: [physical_activity_type_service_1.PhysicalActivityTypeService, pagination_service_1.PaginationService],
    })
], PhysicalActivityTypeModule);
//# sourceMappingURL=physical-activity-type.module.js.map