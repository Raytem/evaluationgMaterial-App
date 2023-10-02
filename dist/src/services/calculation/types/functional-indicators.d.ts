import { CreateEstimationDto } from 'src/realizations/estimation/dto/create-estimation.dto';
import { CreateHomeostasisFunctionDto } from 'src/realizations/homeostasis-function/dto/create-homeostasis-function.dto';
import { CreateReliabilityFunctionDto } from 'src/realizations/reliability-function/dto/create-reliability-function.dto';
import { CreateWaterproofFunctionDto } from 'src/realizations/waterproof-function/dto/create-waterproof-function.dto';
export declare class FunctionalIndicators {
    waterproofFunction: CreateWaterproofFunctionDto;
    homeostasisFunction: CreateHomeostasisFunctionDto;
    reliabilityFunction: CreateReliabilityFunctionDto;
    estimation: CreateEstimationDto;
}
