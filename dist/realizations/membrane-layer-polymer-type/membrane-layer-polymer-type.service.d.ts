import { CreateMembraneLayerPolymerTypeDto } from './dto/create-membrane-layer-polymer-type.dto';
import { UpdateMembraneLayerPolymerTypeDto } from './dto/update-membrane-layer-polymer-type.dto';
import { MembraneLayerPolymerTypeEntity } from './entities/membrane-layer-polymer-type.entity';
import { PaginationService } from 'src/pagination/pagination.service';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
export declare class MembraneLayerPolymerTypeService {
    private paginationService;
    private membraneLayerPolymerTypeRepository;
    constructor(paginationService: PaginationService, membraneLayerPolymerTypeRepository: Repository<MembraneLayerPolymerTypeEntity>);
    create(createMembraneLayerPolymerTypeDto: CreateMembraneLayerPolymerTypeDto): Promise<MembraneLayerPolymerTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<MembraneLayerPolymerTypeEntity[]>;
    findOne(id: number, name?: string): Promise<MembraneLayerPolymerTypeEntity>;
    update(id: number, updateMembraneLayerPolymerTypeDto: UpdateMembraneLayerPolymerTypeDto): Promise<MembraneLayerPolymerTypeEntity>;
    remove(id: number): Promise<MembraneLayerPolymerTypeEntity>;
}
