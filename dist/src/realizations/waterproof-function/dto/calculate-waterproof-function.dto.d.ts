import { WaterproofFunctionEntity } from '../entities/waterproof-function.entity';
declare const CalculateWaterproofFunctionDto_base: import("@nestjs/common").Type<Omit<WaterproofFunctionEntity, "id" | "materialBlottingPressure_base" | "waterproof_base" | "materialBlottingTime_base" | "waterproofRealizationCriteria_calculated" | "waterproofRealizationCriteria_base" | "dynamicWaterproofCriteria_calculated" | "dynamicWaterproofCriteria_base" | "comment" | "avgWeightedEstimate">>;
export declare class CalculateWaterproofFunctionDto extends CalculateWaterproofFunctionDto_base {
}
export {};
