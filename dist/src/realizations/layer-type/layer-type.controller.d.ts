import { LayerTypeService } from './layer-type.service';
import { CreateLayerTypeDto } from './dto/create-layer-type.dto';
import { UpdateLayerTypeDto } from './dto/update-layer-type.dto';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
export declare class LayerTypeController {
    private readonly layerTypeService;
    constructor(layerTypeService: LayerTypeService);
    create(createAbrasionTypeDto: CreateLayerTypeDto): Promise<import("./entities/layer-type.entity").LayerTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<import("./entities/layer-type.entity").LayerTypeEntity[]>;
    findOne(id: number): Promise<import("./entities/layer-type.entity").LayerTypeEntity>;
    update(id: number, updateAbrasionTypeDto: UpdateLayerTypeDto): Promise<import("./entities/layer-type.entity").LayerTypeEntity>;
    remove(id: number): Promise<import("./entities/layer-type.entity").LayerTypeEntity>;
}
