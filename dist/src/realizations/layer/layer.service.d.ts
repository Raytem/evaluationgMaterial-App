import { CreateLayerDto } from './dto/create-layer.dto';
import { EntityManager, Repository } from 'typeorm';
import { LayerEntity } from './entities/layer.entity';
import { LayerTypeService } from '../layer-type/layer-type.service';
import { LayerTypeEntity } from '../layer-type/entities/layer-type.entity';
import { MaterialEntity } from '../material/entities/material.entity';
export declare class LayerService {
    private layerRepository;
    private layerTypeService;
    constructor(layerRepository: Repository<LayerEntity>, layerTypeService: LayerTypeService);
    create(createLayerDto: CreateLayerDto, layerType?: LayerTypeEntity): Promise<LayerEntity>;
    createMany(material: MaterialEntity, createLayerDtoList: CreateLayerDto[], manager?: EntityManager): Promise<LayerEntity[]>;
}
