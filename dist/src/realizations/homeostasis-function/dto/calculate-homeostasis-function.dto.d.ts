import { HomeostasisFunctionEntity } from '../entities/homeostasis-function.entity';
declare const CalculateHomeostasisFunctionDto_base: import("@nestjs/common").Type<Omit<HomeostasisFunctionEntity, "id" | "material" | "comment" | "avgWeightedEstimate" | "waterPermeability_calculated" | "waterPermeability_relativeValuation" | "waterPermeabilityDynamicCriteria_calculated" | "waterPermeabilityDynamicCriteria_relativeValuation" | "totalThermalResistance_calculated" | "totalThermalResistance_relativeValuation" | "minPressureDiff" | "maxPressureDiff" | "estimatedPressureDiff" | "avgRangePressureVal" | "comfTempInsideClothes" | "comfHumidityInsideClothes" | "minOutdoorTemp" | "maxOutdoorTemp" | "minOutdoorHumidity" | "maxOutdoorHumidity" | "avgOutdoorAirSpeed">>;
export declare class CalculateHomeostasisFunctionDto extends CalculateHomeostasisFunctionDto_base {
}
export {};
