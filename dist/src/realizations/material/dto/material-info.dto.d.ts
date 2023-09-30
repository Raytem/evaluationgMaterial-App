import { CreateLayerDto } from 'src/realizations/layer/dto/create-layer.dto';
export declare class MaterialInfoDto {
    name: string;
    manufacturer: string;
    description: string;
    depth: number;
    productionMethod_id: number;
    membraneLayerPolymerType_id: number;
    glueType_id: number;
    layers: CreateLayerDto[];
}
