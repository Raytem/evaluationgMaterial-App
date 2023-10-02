import { CreateEstimationDto } from 'src/realizations/estimation/dto/create-estimation.dto';
import { EstimationEntity } from 'src/realizations/estimation/entities/estimation.entity';
import { CreateHomeostasisFunctionDto } from 'src/realizations/homeostasis-function/dto/create-homeostasis-function.dto';
import { HomeostasisFunctionEntity } from 'src/realizations/homeostasis-function/entities/homeostasis-function.entity';
import { CreateReliabilityFunctionDto } from 'src/realizations/reliability-function/dto/create-reliability-function.dto';
import { ReliabilityFunctionEntity } from 'src/realizations/reliability-function/entities/reliability-function.entity';
import { CreateWaterproofFunctionDto } from 'src/realizations/waterproof-function/dto/create-waterproof-function.dto';
import { WaterproofFunctionEntity } from 'src/realizations/waterproof-function/entities/waterproof-function.entity';

export class FunctionalIndicators {
  waterproofFunction: CreateWaterproofFunctionDto;

  homeostasisFunction: CreateHomeostasisFunctionDto;

  reliabilityFunction: CreateReliabilityFunctionDto;

  estimation: CreateEstimationDto;
}
