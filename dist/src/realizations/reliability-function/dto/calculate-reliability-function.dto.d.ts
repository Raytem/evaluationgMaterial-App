import { ReliabilityFunctionEntity } from '../entities/reliability-function.entity';
declare const CalculateReliabilityFunctionDto_base: import("@nestjs/common").Type<Omit<ReliabilityFunctionEntity, "id" | "material" | "comment" | "avgWeightedEstimate" | "relativeBlottingPressureAfterLoad_relativeValuation" | "relativeWaterResistanceAfterLoad_relativeValuation" | "relativeBlottingTimeAfterLoad_relativeValuation" | "waterproofRealizationCriteriaAfterLoad_calculated" | "waterproofRealizationCriteriaAfterLoad_base" | "waterproofRealizationCriteriaAfterLoad_relativeValuation">>;
export declare class CalculateReliabilityFunctionDto extends CalculateReliabilityFunctionDto_base {
}
export {};
