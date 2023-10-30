import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
export declare class MaterialFilterDto extends PaginationDto {
    name: string;
    userId: number;
    layersCnt: number;
    membraneLayerPolymerType_id: number;
    productionMethod_id: number;
    depth_min: number;
    depth_max: number;
    materialBlottingPressure_calculated_min: number;
    materialBlottingPressure_calculated_max: number;
    materialBlottingTime_calculated_min: number;
    materialBlottingTime_calculated_max: number;
    waterPermeability_calculated_min: number;
    waterPermeability_calculated_max: number;
    totalThermalResistance_calculated_min: number;
    totalThermalResistance_calculated_max: number;
    relativeBlottingPressureAfterLoad_relativeValuation_min: number;
    relativeBlottingPressureAfterLoad_relativeValuation_max: number;
}
