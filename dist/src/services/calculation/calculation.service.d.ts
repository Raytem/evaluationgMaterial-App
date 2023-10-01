import { CreateMaterialDto } from 'src/realizations/material/dto/create-material.dto';
import { FunctionalIndicators } from './types/functional-indicators';
import { ConfigType } from '@nestjs/config';
import { calculationsConfig } from 'src/config/config-functions/calculations.config';
import { CommentService } from '../comment/comment.service';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
export declare class CalculationService {
    private calcCfg;
    private commentService;
    constructor(calcCfg: ConfigType<typeof calculationsConfig>, commentService: CommentService);
    calcAll(createMaterialDto: CreateMaterialDto, material: MaterialEntity): FunctionalIndicators;
    private calcWaterproofFunction;
    private calcHomeostasisFunction;
    private calcReliabilityFunction;
    private calcEstimation;
}
