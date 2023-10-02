import { WaterproofFunctionEntity } from '../entities/waterproof-function.entity';
declare const CalculateWaterproofFunctionDto_base: import("@nestjs/common").Type<Omit<WaterproofFunctionEntity, "comment" | "materialBlottingPressure_relativeValuation" | "waterproof_relativeValuation" | "materialBlottingTime_relativeValuation" | "waterproofRealizationCriteria_calculated" | "waterproofRealizationCriteria_relativeValuation" | "dynamicWaterproofCriteria_calculated" | "dynamicWaterproofCriteria_relativeValuation" | "avgWeightedEstimate" | "id">>;
export declare class CalculateWaterproofFunctionDto extends CalculateWaterproofFunctionDto_base {
}
export {};
