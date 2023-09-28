import { CreateLayerTypeDto } from './dto/create-layer-type.dto';
import { UpdateLayerTypeDto } from './dto/update-layer-type.dto';
import { PaginationService } from 'src/pagination/pagination.service';
import { LayerTypeEntity } from './entities/layer-type.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
export declare class LayerTypeService {
    private paginationService;
    private layerTypeRepository;
    constructor(paginationService: PaginationService, layerTypeRepository: Repository<LayerTypeEntity>);
    create(createLayerTypeDto: CreateLayerTypeDto): Promise<LayerTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<LayerTypeEntity[]>;
    findOne(id: number, name?: string): Promise<LayerTypeEntity>;
    update(id: number, updateLayerTypeDto: UpdateLayerTypeDto): Promise<LayerTypeEntity>;
    remove(id: number): Promise<LayerTypeEntity>;
}
