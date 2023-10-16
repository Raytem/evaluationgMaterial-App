import { WaterproofFunctionEntity } from '../entities/waterproof-function.entity';
declare const CalculateWaterproofFunctionDto_base: import("@nestjs/common").Type<Omit<WaterproofFunctionEntity, "id" | "waterproofRealizationCriteria_calculated" | "dynamicWaterproofCriteria_calculated" | "materialBlottingPressure_relativeValuation" | "waterproof_relativeValuation" | "materialBlottingTime_relativeValuation" | "waterproofRealizationCriteria_relativeValuation" | "dynamicWaterproofCriteria_relativeValuation" | "comment" | "avgWeightedEstimate">>;
export declare class CalculateWaterproofFunctionDto extends CalculateWaterproofFunctionDto_base {
}
export {};
