"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const type_orm_config_service_1 = require("./config/config-classes/type-orm.config.service");
const postgres_config_1 = require("./config/config-functions/postgres.config");
const app_config_1 = require("./config/config-functions/app.config");
const user_module_1 = require("./realizations/user/user.module");
const env_validation_1 = require("./config/env-validation");
const logger_middleware_1 = require("./middlewares/logger.middleware");
const core_1 = require("@nestjs/core");
const all_exception_filter_1 = require("./exception-filters/all-exception.filter");
const timeout_interceptor_1 = require("./interceptors/timeout.interceptor");
const auth_module_1 = require("./auth/auth.module");
const pagination_module_1 = require("./pagination/pagination.module");
const admin_guard_1 = require("./auth/guards/admin.guard");
const exel_module_1 = require("./exel/exel.module");
const abrasion_type_module_1 = require("./realizations/abrasion-type/abrasion-type.module");
const bending_type_module_1 = require("./realizations/bending-type/bending-type.module");
const condition_module_1 = require("./realizations/condition/condition.module");
const estimation_module_1 = require("./realizations/estimation/estimation.module");
const glue_type_module_1 = require("./realizations/glue-type/glue-type.module");
const homeostasis_function_module_1 = require("./realizations/homeostasis-function/homeostasis-function.module");
const image_module_1 = require("./realizations/image/image.module");
const layer_module_1 = require("./realizations/layer/layer.module");
const layer_type_module_1 = require("./realizations/layer-type/layer-type.module");
const material_module_1 = require("./realizations/material/material.module");
const membrane_layer_polymer_type_module_1 = require("./realizations/membrane-layer-polymer-type/membrane-layer-polymer-type.module");
const physical_activity_type_module_1 = require("./realizations/physical-activity-type/physical-activity-type.module");
const production_method_module_1 = require("./realizations/production-method/production-method.module");
const reliability_function_module_1 = require("./realizations/reliability-function/reliability-function.module");
const washing_module_1 = require("./realizations/washing/washing.module");
const washing_type_module_1 = require("./realizations/washing-type/washing-type.module");
const waterproof_function_module_1 = require("./realizations/waterproof-function/waterproof-function.module");
const basic_auth_guard_1 = require("./auth/guards/basic-auth.guard");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                validate: env_validation_1.validate,
                expandVariables: true,
                load: [app_config_1.appConfig, postgres_config_1.postgresConfig],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useClass: type_orm_config_service_1.TypeOrmConfigService,
            }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            material_module_1.MaterialModule,
            pagination_module_1.PaginationModule,
            exel_module_1.ExelModule,
            abrasion_type_module_1.AbrasionTypeModule,
            bending_type_module_1.BendingTypeModule,
            condition_module_1.ConditionModule,
            estimation_module_1.EstimationModule,
            glue_type_module_1.GlueTypeModule,
            homeostasis_function_module_1.HomeostasisFunctionModule,
            image_module_1.ImageModule,
            layer_module_1.LayerModule,
            layer_type_module_1.LayerTypeModule,
            membrane_layer_polymer_type_module_1.MembraneLayerPolymerTypeModule,
            physical_activity_type_module_1.PhysicalActivityTypeModule,
            production_method_module_1.ProductionMethodModule,
            reliability_function_module_1.ReliabilityFunctionModule,
            washing_module_1.WashingModule,
            washing_type_module_1.WashingTypeModule,
            waterproof_function_module_1.WaterproofFunctionModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: basic_auth_guard_1.BasicAuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: admin_guard_1.AdminGuard,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: all_exception_filter_1.AllExceptionFilter,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: timeout_interceptor_1.TimeoutInterceptor,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: common_1.ClassSerializerInterceptor,
            },
            app_service_1.AppService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map