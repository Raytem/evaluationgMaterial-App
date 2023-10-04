import { ReliabilityFunctionEntity } from '../entities/reliability-function.entity';
declare const CalculateReliabilityFunctionDto_base: import("@nestjs/common").Type<Omit<ReliabilityFunctionEntity, "id" | "material" | "comment" | "avgWeightedEstimate">>;
export declare class CalculateReliabilityFunctionDto extends CalculateReliabilityFunctionDto_base {
}
export {};
