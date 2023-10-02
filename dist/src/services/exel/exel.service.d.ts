/// <reference types="node" />
import { ConfigType } from '@nestjs/config';
import { fileConfig } from 'src/config/config-functions/file.config';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
export declare class ExelService {
    private fileCfg;
    constructor(fileCfg: ConfigType<typeof fileConfig>);
    generateReport(material: MaterialEntity): Promise<Buffer>;
    private fillWaterproofSheet;
    private fillHomeostasisSheet;
    private fillReliabilitySheet;
    private fillEstimationSheet;
}
