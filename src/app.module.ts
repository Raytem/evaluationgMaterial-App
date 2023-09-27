import {
  ClassSerializerInterceptor,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/config-classes/type-orm.config.service';
import { postgresConfig } from './config/config-functions/postgres.config';
import { appConfig } from './config/config-functions/app.config';
import { UserModule } from './realizations/user/user.module';
import { validate } from './config/env-validation';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AllExceptionFilter } from './exception-filters/all-exception.filter';
import { TimeoutInterceptor } from './interceptors/timeout.interceptor';
import { AuthModule } from './auth/auth.module';
import { PaginationModule } from './pagination/pagination.module';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { LocalHeadersAuthGuard } from './auth/guards/local-headers-auth.guard';
import { AuthService } from './auth/auth.service';
import { UserService } from './realizations/user/user.service';
import { PaginationService } from './pagination/pagination.service';
import { AdminGuard } from './auth/guards/admin.guard';
import { ExelModule } from './exel/exel.module';
import { AbrasionTypeModule } from './realizations/abrasion-type/abrasion-type.module';
import { BendingTypeModule } from './realizations/bending-type/bending-type.module';
import { ConditionModule } from './realizations/condition/condition.module';
import { EstimationModule } from './realizations/estimation/estimation.module';
import { GlueTypeModule } from './realizations/glue-type/glue-type.module';
import { HomeostasisFunctionModule } from './realizations/homeostasis-function/homeostasis-function.module';
import { ImageModule } from './realizations/image/image.module';
import { LayerModule } from './realizations/layer/layer.module';
import { LayerTypeModule } from './realizations/layer-type/layer-type.module';
import { MaterialModule } from './realizations/material/material.module';
import { MembraneLayerPolymerTypeModule } from './realizations/membrane-layer-polymer-type/membrane-layer-polymer-type.module';
import { PhysicalActivityTypeModule } from './realizations/physical-activity-type/physical-activity-type.module';
import { ProductionMethodModule } from './realizations/production-method/production-method.module';
import { ReliabilityFunctionModule } from './realizations/reliability-function/reliability-function.module';
import { WashingModule } from './realizations/washing/washing.module';
import { WashingTypeModule } from './realizations/washing-type/washing-type.module';
import { WaterproofFunctionModule } from './realizations/waterproof-function/waterproof-function.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
      expandVariables: true,
      load: [appConfig, postgresConfig],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    UserModule,
    AuthModule,
    PaginationModule,
    ExelModule,
    AbrasionTypeModule,
    BendingTypeModule,
    ConditionModule,
    EstimationModule,
    GlueTypeModule,
    HomeostasisFunctionModule,
    ImageModule,
    LayerModule,
    LayerTypeModule,
    MaterialModule,
    MembraneLayerPolymerTypeModule,
    PhysicalActivityTypeModule,
    ProductionMethodModule,
    ReliabilityFunctionModule,
    WashingModule,
    WashingTypeModule,
    WaterproofFunctionModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: LocalHeadersAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: AdminGuard,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeoutInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    AppService,
    AuthService,
    UserService,
    PaginationService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
