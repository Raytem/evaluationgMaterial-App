"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfigService = void 0;
const common_1 = require("@nestjs/common");
const postgres_config_1 = require("../config-functions/postgres.config");
const user_entity_1 = require("../../realizations/user/entities/user.entity");
const material_entity_1 = require("../../realizations/material/entities/material.entity");
const production_method_entity_1 = require("../../realizations/production-method/entities/production-method.entity");
const abrasion_type_entity_1 = require("../../realizations/abrasion-type/entities/abrasion-type.entity");
const bending_type_entity_1 = require("../../realizations/bending-type/entities/bending-type.entity");
const condition_entity_1 = require("../../realizations/condition/entities/condition.entity");
const glue_type_entity_1 = require("../../realizations/glue-type/entities/glue-type.entity");
const layer_entity_1 = require("../../realizations/layer/entities/layer.entity");
const layer_type_entity_1 = require("../../realizations/layer-type/entities/layer-type.entity");
const washing_type_entity_1 = require("../../realizations/washing-type/entities/washing-type.entity");
const washing_entity_1 = require("../../realizations/washing/entities/washing.entity");
const physical_activity_type_entity_1 = require("../../realizations/physical-activity-type/entities/physical-activity-type.entity");
const membrane_layer_polymer_type_entity_1 = require("../../realizations/membrane-layer-polymer-type/entities/membrane-layer-polymer-type.entity");
const image_entity_1 = require("../../realizations/image/entities/image.entity");
const waterproof_function_entity_1 = require("../../realizations/waterproof-function/entities/waterproof-function.entity");
const homeostasis_function_entity_1 = require("../../realizations/homeostasis-function/entities/homeostasis-function.entity");
const reliability_function_entity_1 = require("../../realizations/reliability-function/entities/reliability-function.entity");
const estimation_entity_1 = require("../../realizations/estimation/entities/estimation.entity");
let TypeOrmConfigService = class TypeOrmConfigService {
    constructor(psqlCfg) {
        this.psqlCfg = psqlCfg;
    }
    createTypeOrmOptions(connectionName) {
        return {
            type: this.psqlCfg.type,
            host: this.psqlCfg.host,
            port: this.psqlCfg.port,
            username: this.psqlCfg.username,
            password: this.psqlCfg.password,
            database: this.psqlCfg.database,
            synchronize: this.psqlCfg.synchronize,
            entities: [
                user_entity_1.UserEntity,
                material_entity_1.MaterialEntity,
                production_method_entity_1.ProductionMethodEntity,
                abrasion_type_entity_1.AbrasionTypeEntity,
                bending_type_entity_1.BendingTypeEntity,
                condition_entity_1.ConditionEntity,
                glue_type_entity_1.GlueTypeEntity,
                layer_entity_1.LayerEntity,
                layer_type_entity_1.LayerTypeEntity,
                washing_type_entity_1.WashingTypeEntity,
                washing_entity_1.WashingEntity,
                production_method_entity_1.ProductionMethodEntity,
                physical_activity_type_entity_1.PhysicalActivityTypeEntity,
                membrane_layer_polymer_type_entity_1.MembraneLayerPolymerTypeEntity,
                image_entity_1.ImageEntity,
                waterproof_function_entity_1.WaterproofFunctionEntity,
                homeostasis_function_entity_1.HomeostasisFunctionEntity,
                reliability_function_entity_1.ReliabilityFunctionEntity,
                estimation_entity_1.EstimationEntity,
            ],
        };
    }
};
exports.TypeOrmConfigService = TypeOrmConfigService;
exports.TypeOrmConfigService = TypeOrmConfigService = __decorate([
    __param(0, (0, common_1.Inject)(postgres_config_1.postgresConfig.KEY)),
    __metadata("design:paramtypes", [void 0])
], TypeOrmConfigService);
//# sourceMappingURL=type-orm.config.service.js.map