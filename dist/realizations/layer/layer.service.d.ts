import { CreateLayerDto } from './dto/create-layer.dto';
import { Repository } from 'typeorm';
import { LayerEntity } from './entities/layer.entity';
export declare class LayerService {
    private layerRepository;
    constructor(layerRepository: Repository<LayerEntity>);
    create(createLayerDto: CreateLayerDto): Promise<string>;
}
