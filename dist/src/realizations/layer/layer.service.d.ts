import { CreateLayerDto } from './dto/create-layer.dto';
import { Repository } from 'typeorm';
import { LayerEntity } from './entities/layer.entity';
import { LayerTypeService } from '../layer-type/layer-type.service';
export declare class LayerService {
    private layerRepository;
    private layerTypeService;
    constructor(layerRepository: Repository<LayerEntity>, layerTypeService: LayerTypeService);
    create(createLayerDto: CreateLayerDto): Promise<{
        indexNum: number;
        layerType: any;
    } & LayerEntity>;
}
