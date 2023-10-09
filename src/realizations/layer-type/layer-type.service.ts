import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLayerTypeDto } from './dto/create-layer-type.dto';
import { UpdateLayerTypeDto } from './dto/update-layer-type.dto';
import { NoSuchException } from 'src/exceptions/no-such.exception';
import { PaginationService } from 'src/services/pagination/pagination.service';
import { InjectRepository } from '@nestjs/typeorm';
import { LayerTypeEntity } from './entities/layer-type.entity';
import { In, Repository } from 'typeorm';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import { EntitiesReferException } from 'src/exceptions/entities-refer.exception';

@Injectable()
export class LayerTypeService {
  constructor(
    private paginationService: PaginationService,

    @InjectRepository(LayerTypeEntity)
    private layerTypeRepository: Repository<LayerTypeEntity>,
  ) {}

  async create(
    createLayerTypeDto: CreateLayerTypeDto,
  ): Promise<LayerTypeEntity> {
    let layerType;
    try {
      layerType = await this.findOne(null, createLayerTypeDto.name);
    } catch {}

    if (layerType) {
      throw new BadRequestException('LayerType with this name already exists');
    }

    const newLayerType = await this.layerTypeRepository.save({
      ...createLayerTypeDto,
    });

    return newLayerType;
  }

  async findAll(paginationDto?: PaginationDto): Promise<LayerTypeEntity[]> {
    const pagination = this.paginationService.paginate(paginationDto);

    return await this.layerTypeRepository.find({
      ...pagination,
    });
  }

  async findByIds(layerTypeIds: number[]) {
    return await this.layerTypeRepository.find({
      where: {
        id: In(layerTypeIds),
      },
    });
  }

  async findOne(id: number, name?: string): Promise<LayerTypeEntity> {
    let layerType;

    if (name) {
      layerType = await this.layerTypeRepository.findOneBy({
        name,
      });
    } else {
      layerType = await this.layerTypeRepository.findOneBy({
        id,
      });
    }

    if (!layerType) {
      throw new NoSuchException('layer type');
    }

    return layerType;
  }

  async update(
    id: number,
    updateLayerTypeDto: UpdateLayerTypeDto,
  ): Promise<LayerTypeEntity> {
    await this.findOne(id);

    await this.layerTypeRepository.update(
      { id },
      {
        ...updateLayerTypeDto,
      },
    );

    return await this.findOne(id);
  }

  async remove(id: number): Promise<LayerTypeEntity> {
    const layerType = await this.findOne(id);

    try {
      await this.layerTypeRepository.delete({ id });
    } catch {
      throw new EntitiesReferException('layer type');
    }

    return layerType;
  }
}
