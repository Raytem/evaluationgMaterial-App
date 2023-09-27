import { Inject } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { postgresConfig } from '../config-functions/postgres.config';
import { ConfigType } from '@nestjs/config';
import { UserEntity } from 'src/realizations/user/entities/user.entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { ProductionMethodEntity } from 'src/realizations/production-method/entities/production-method.entity';
import { AbrasionTypeEntity } from 'src/realizations/abrasion-type/entities/abrasion-type.entity';
import { BendingTypeEntity } from 'src/realizations/bending-type/entities/bending-type.entity';
import { ConditionEntity } from 'src/realizations/condition/entities/condition.entity';
import { GlueTypeEntity } from 'src/realizations/glue-type/entities/glue-type.entity';
import { LayerEntity } from 'src/realizations/layer/entities/layer.entity';
import { LayerTypeEntity } from 'src/realizations/layer-type/entities/layer-type.entity';
import { WashingTypeEntity } from 'src/realizations/washing-type/entities/washing-type.entity';
import { WashingEntity } from 'src/realizations/washing/entities/washing.entity';
import { PhysicalActivityTypeEntity } from 'src/realizations/physical-activity-type/entities/physical-activity-type.entity';
import { MembraneLayerPolymerTypeEntity } from 'src/realizations/membrane-layer-polymer-type/entities/membrane-layer-polymer-type.entity';
import { ImageEntity } from 'src/realizations/image/entities/image.entity';
import { WaterproofFunctionEntity } from 'src/realizations/waterproof-function/entities/waterproof-function.entity';
import { HomeostasisFunctionEntity } from 'src/realizations/homeostasis-function/entities/homeostasis-function.entity';
import { ReliabilityFunctionEntity } from 'src/realizations/reliability-function/entities/reliability-function.entity';
import { EstimationEntity } from 'src/realizations/estimation/entities/estimation.entity';

export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(postgresConfig.KEY)
    private psqlCfg: ConfigType<typeof postgresConfig>,
  ) {}

  createTypeOrmOptions(
    connectionName,
  ): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: this.psqlCfg.type as 'postgres',
      host: this.psqlCfg.host,
      port: this.psqlCfg.port,
      username: this.psqlCfg.username,
      password: this.psqlCfg.password,
      database: this.psqlCfg.database,
      synchronize: this.psqlCfg.synchronize,
      entities: [
        UserEntity,
        MaterialEntity,
        ProductionMethodEntity,
        AbrasionTypeEntity,
        BendingTypeEntity,
        ConditionEntity,
        GlueTypeEntity,
        LayerEntity,
        LayerTypeEntity,
        WashingTypeEntity,
        WashingEntity,
        ProductionMethodEntity,
        PhysicalActivityTypeEntity,
        MembraneLayerPolymerTypeEntity,
        ImageEntity,
        WaterproofFunctionEntity,
        HomeostasisFunctionEntity,
        ReliabilityFunctionEntity,
        EstimationEntity,
      ],
    };
  }
}
