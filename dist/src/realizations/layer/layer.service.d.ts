import { CreateLayerDto } from './dto/create-layer.dto';
import { Repository } from 'typeorm';
import { LayerEntity } from './entities/layer.entity';
import { LayerTypeService } from '../layer-type/layer-type.service';
import { LayerTypeEntity } from '../layer-type/entities/layer-type.entity';
export declare class LayerService {
    private layerRepository;
    private layerTypeService;
    constructor(layerRepository: Repository<LayerEntity>, layerTypeService: LayerTypeService);
    create(createLayerDto: CreateLayerDto, layerType?: LayerTypeEntity): Promise<LayerEntity>;
    createMany(createLayerDtoList: CreateLayerDto[]): Promise<LayerEntity[]>;
}
