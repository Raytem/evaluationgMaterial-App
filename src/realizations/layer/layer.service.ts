import { Injectable } from '@nestjs/common';
import { CreateLayerDto } from './dto/create-layer.dto';
import { Repository } from 'typeorm';
import { LayerEntity } from './entities/layer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LayerTypeService } from '../layer-type/layer-type.service';

@Injectable()
export class LayerService {
  constructor(
    @InjectRepository(LayerEntity)
    private layerRepository: Repository<LayerEntity>,

    private layerTypeService: LayerTypeService,
  ) {}
  async create(createLayerDto: CreateLayerDto) {
    let layerType;
    try {
      layerType = await this.layerTypeService.findOne(
        createLayerDto.layerType_id,
      );
    } catch (e) {
      throw e;
    }

    const newLayer = await this.layerRepository.save({
      indexNum: createLayerDto.indexNum,
      layerType: layerType,
    });

    return newLayer;
  }
}
