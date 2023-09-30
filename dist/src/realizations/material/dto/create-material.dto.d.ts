import { CreateConditionDto } from 'src/realizations/condition/dto/create-condition.dto';
import { CalculateWaterproofFunctionDto } from 'src/realizations/waterproof-function/dto/calculate-waterproof-function.dto';
import { CalculateReliabilityFunctionDto } from 'src/realizations/reliability-function/dto/calculate-reliability-function.dto';
import { CalculateHomeostasisFunctionDto } from 'src/realizations/homeostasis-function/dto/calculate-homeostasis-function.dto';
import { MaterialInfoDto } from './material-info.dto';
export declare class CreateMaterialDto {
    images: string;
    material: MaterialInfoDto;
    condition: CreateConditionDto;
    waterproofFunction: CalculateWaterproofFunctionDto;
    homeostasisFunction: CalculateHomeostasisFunctionDto;
    reliabilityFunction: CalculateReliabilityFunctionDto;
}
