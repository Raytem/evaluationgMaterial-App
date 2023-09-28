import { CreateConditionDto } from 'src/realizations/condition/dto/create-condition.dto';
import { CreateLayerDto } from 'src/realizations/layer/dto/create-layer.dto';
declare class MaterialDto {
    name: string;
    manufacturer: string;
    description: string;
    depth: number;
}
export declare class CreateMaterialDto {
    material: MaterialDto;
    layers: CreateLayerDto[];
    condition: CreateConditionDto;
    productionMethod_id: number;
    membraneLayerPolymer_id: number;
    glueType_id: number;
}
export {};
