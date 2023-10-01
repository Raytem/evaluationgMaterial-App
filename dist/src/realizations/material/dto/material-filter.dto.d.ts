import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
export declare class MaterialFilterDto extends PaginationDto {
    name: string;
    layersCnt: number;
    depth: number;
    materialBlottingPressure_calculated: number;
    waterPermeability_calculated: number;
    totalThermalResistance_calculated: number;
    materialBlottingPressure_relativeValuation: number;
    membraneLayerPolymerType_id: number;
    productionMethod_id: number;
}
