"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionModule = void 0;
const common_1 = require("@nestjs/common");
const condition_service_1 = require("./condition.service");
const typeorm_1 = require("@nestjs/typeorm");
const condition_entity_1 = require("./entities/condition.entity");
const abrasion_type_module_1 = require("../abrasion-type/abrasion-type.module");
const bending_type_module_1 = require("../bending-type/bending-type.module");
const physical_activity_type_module_1 = require("../physical-activity-type/physical-activity-type.module");
const washing_type_module_1 = require("../washing-type/washing-type.module");
const washing_module_1 = require("../washing/washing.module");
let ConditionModule = class ConditionModule {
};
exports.ConditionModule = ConditionModule;
exports.ConditionModule = ConditionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            abrasion_type_module_1.AbrasionTypeModule,
            bending_type_module_1.BendingTypeModule,
            physical_activity_type_module_1.PhysicalActivityTypeModule,
            washing_type_module_1.WashingTypeModule,
            washing_module_1.WashingModule,
            typeorm_1.TypeOrmModule.forFeature([condition_entity_1.ConditionEntity]),
        ],
        providers: [condition_service_1.ConditionService],
        exports: [condition_service_1.ConditionService],
    })
], ConditionModule);
//# sourceMappingURL=condition.module.js.map