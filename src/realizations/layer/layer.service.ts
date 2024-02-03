import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLayerDto } from './dto/create-layer.dto';
import { EntityManager, In, Repository } from 'typeorm';
import { LayerEntity } from './entities/layer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LayerTypeService } from '../layer-type/layer-type.service';
import { LayerTypeEntity } from '../layer-type/entities/layer-type.entity';
import { MaterialEntity } from '../material/entities/material.entity';
import { NoSuchException } from 'src/exceptions/no-such.exception';

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
    material: MaterialEntity,
    createLayerDtoList: CreateLayerDto[],
    manager?: EntityManager,
  ): Promise<LayerEntity[]> {
    const layerIds = createLayerDtoList.map(
      (createLayerDto) => createLayerDto.layerType_id,
    );
    const layerIndexNums = createLayerDtoList.map((dto) => dto.indexNum);
    const layerIndexNumsSet = Array.from(new Set(layerIndexNums));
    if (layerIndexNumsSet.length !== layerIndexNums.length) {
      throw new BadRequestException('duplicated indexNum property');
    }

    const layerTypes = await this.layerTypeService.findByIds(layerIds);

    const createLayerList = createLayerDtoList.map((createLayerDto) => {
      const layerType = layerTypes.find(
        (layerType) => layerType.id === createLayerDto.layerType_id,
      );

      return this.layerRepository.create({
        layerType,
        indexNum: createLayerDto.indexNum,
        material,
      });
    });

    if (manager) {
      return await manager
        .withRepository(this.layerRepository)
        .save(createLayerList);
    } else {
      return await this.layerRepository.save(createLayerList);
    }
  }
}
