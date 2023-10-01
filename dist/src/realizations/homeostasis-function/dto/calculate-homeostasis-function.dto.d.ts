import { HomeostasisFunctionEntity } from '../entities/homeostasis-function.entity';
declare const CalculateHomeostasisFunctionDto_base: import("@nestjs/common").Type<Omit<HomeostasisFunctionEntity, "id" | "material" | "waterPermeability_calculated" | "waterPermeabilityDynamicCriteria_calculated" | "totalThermalResistance_calculated" | "waterPermeability_relativeValuation" | "waterPermeabilityDynamicCriteria_relativeValuation" | "totalThermalResistance_relativeValuation" | "minPressureDiff" | "maxPressureDiff" | "estimatedPressureDiff" | "avgRangePressureVal" | "comment" | "avgWeightedEstimate">>;
export declare class CalculateHomeostasisFunctionDto extends CalculateHomeostasisFunctionDto_base {
}
export {};
