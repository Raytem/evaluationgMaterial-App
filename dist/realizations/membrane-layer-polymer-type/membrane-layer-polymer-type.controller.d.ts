import { MembraneLayerPolymerTypeService } from './membrane-layer-polymer-type.service';
import { CreateMembraneLayerPolymerTypeDto } from './dto/create-membrane-layer-polymer-type.dto';
import { UpdateMembraneLayerPolymerTypeDto } from './dto/update-membrane-layer-polymer-type.dto';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
export declare class MembraneLayerPolymerTypeController {
    private readonly membraneLayerPolymerTypeService;
    constructor(membraneLayerPolymerTypeService: MembraneLayerPolymerTypeService);
    create(createAbrasionTypeDto: CreateMembraneLayerPolymerTypeDto): Promise<import("./entities/membrane-layer-polymer-type.entity").MembraneLayerPolymerTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<import("./entities/membrane-layer-polymer-type.entity").MembraneLayerPolymerTypeEntity[]>;
    findOne(id: number): Promise<import("./entities/membrane-layer-polymer-type.entity").MembraneLayerPolymerTypeEntity>;
    update(id: number, updateAbrasionTypeDto: UpdateMembraneLayerPolymerTypeDto): Promise<import("./entities/membrane-layer-polymer-type.entity").MembraneLayerPolymerTypeEntity>;
    remove(id: number): Promise<import("./entities/membrane-layer-polymer-type.entity").MembraneLayerPolymerTypeEntity>;
}
