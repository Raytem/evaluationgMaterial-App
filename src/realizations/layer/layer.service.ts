import { Injectable } from '@nestjs/common';
import { CreateLayerDto } from './dto/create-layer.dto';
import { Repository } from 'typeorm';
import { LayerEntity } from './entities/layer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LayerTypeService } from '../layer-type/layer-type.service';
import { LayerTypeEntity } from '../layer-type/entities/layer-type.entity';

@Injectable()
export class LayerService {
  constructor(
    @InjectRepository(LayerEntity)
    private layerRepository: Repository<LayerEntity>,

    private layerTypeService: LayerTypeService,
  ) {}
  async create(
    createLayerDto: CreateLayerDto,
    layerType?: LayerTypeEntity,
  ): Promise<LayerEntity> {
    if (!layerType) {
      try {
        layerType = await this.layerTypeService.findOne(
          createLayerDto.layerType_id,
        );
      } catch (e) {
        throw e;
      }
    }

    return await this.layerRepository.save({
      ...createLayerDto,
      layerType,
    });
  }

  async createMany(
    createLayerDtoList: CreateLayerDto[],
  ): Promise<LayerEntity[]> {
    return await this.layerRepository.save(createLayerDtoList);
  }
}
