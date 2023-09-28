import { MembraneLayerPolymerTypeService } from './membrane-layer-polymer-type.service';
import { CreateMembraneLayerPolymerTypeDto } from './dto/create-membrane-layer-polymer-type.dto';
import { UpdateMembraneLayerPolymerTypeDto } from './dto/update-membrane-layer-polymer-type.dto';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
import { MembraneLayerPolymerTypeEntity } from './entities/membrane-layer-polymer-type.entity';
export declare class MembraneLayerPolymerTypeController {
    private readonly membraneLayerPolymerTypeService;
    constructor(membraneLayerPolymerTypeService: MembraneLayerPolymerTypeService);
    create(createAbrasionTypeDto: CreateMembraneLayerPolymerTypeDto): Promise<MembraneLayerPolymerTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<MembraneLayerPolymerTypeEntity[]>;
    findOne(id: number): Promise<MembraneLayerPolymerTypeEntity>;
    update(id: number, updateAbrasionTypeDto: UpdateMembraneLayerPolymerTypeDto): Promise<MembraneLayerPolymerTypeEntity>;
    remove(id: number): Promise<MembraneLayerPolymerTypeEntity>;
}
