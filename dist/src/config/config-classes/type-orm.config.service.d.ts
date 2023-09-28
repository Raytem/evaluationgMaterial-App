import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { postgresConfig } from '../config-functions/postgres.config';
import { ConfigType } from '@nestjs/config';
export declare class TypeOrmConfigService implements TypeOrmOptionsFactory {
    private psqlCfg;
    constructor(psqlCfg: ConfigType<typeof postgresConfig>);
    createTypeOrmOptions(connectionName: any): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions>;
}
