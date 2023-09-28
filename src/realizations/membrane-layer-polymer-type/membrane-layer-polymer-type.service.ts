import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMembraneLayerPolymerTypeDto } from './dto/create-membrane-layer-polymer-type.dto';
import { UpdateMembraneLayerPolymerTypeDto } from './dto/update-membrane-layer-polymer-type.dto';
import { NoSuchException } from 'src/exceptions/no-such.exception';
import { MembraneLayerPolymerTypeEntity } from './entities/membrane-layer-polymer-type.entity';
import { PaginationService } from 'src/pagination/pagination.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
import { EntitiesReferException } from 'src/exceptions/entities-refer.exception';

@Injectable()
export class MembraneLayerPolymerTypeService {
  constructor(
    private paginationService: PaginationService,

    @InjectRepository(MembraneLayerPolymerTypeEntity)
    private membraneLayerPolymerTypeRepository: Repository<MembraneLayerPolymerTypeEntity>,
  ) {}

  async create(
    createMembraneLayerPolymerTypeDto: CreateMembraneLayerPolymerTypeDto,
  ): Promise<MembraneLayerPolymerTypeEntity> {
    let membraneLayerPolymerType;
    try {
      membraneLayerPolymerType = await this.findOne(
        null,
        createMembraneLayerPolymerTypeDto.name,
      );
    } catch {}

    if (membraneLayerPolymerType) {
      throw new BadRequestException(
        'MembraneLayerPolymerType with this name already exists',
      );
    }

    const newMembraneLayerPolymerType =
      await this.membraneLayerPolymerTypeRepository.save({
        ...createMembraneLayerPolymerTypeDto,
      });

    return newMembraneLayerPolymerType;
  }

  async findAll(
    paginationDto: PaginationDto,
  ): Promise<MembraneLayerPolymerTypeEntity[]> {
    const pagination = this.paginationService.paginate(paginationDto);

    return await this.membraneLayerPolymerTypeRepository.find({
      ...pagination,
    });
  }

  async findOne(
    id: number,
    name?: string,
  ): Promise<MembraneLayerPolymerTypeEntity> {
    let membraneLayerPolymerType;

    if (name) {
      membraneLayerPolymerType =
        await this.membraneLayerPolymerTypeRepository.findOneBy({
          name,
        });
    } else {
      membraneLayerPolymerType =
        await this.membraneLayerPolymerTypeRepository.findOneBy({
          id,
        });
    }

    if (!membraneLayerPolymerType) {
      throw new NoSuchException('membrane layer polymer type');
    }

    return membraneLayerPolymerType;
  }

  async update(
    id: number,
    updateMembraneLayerPolymerTypeDto: UpdateMembraneLayerPolymerTypeDto,
  ): Promise<MembraneLayerPolymerTypeEntity> {
    await this.findOne(id);

    await this.membraneLayerPolymerTypeRepository.update(
      { id },
      {
        ...updateMembraneLayerPolymerTypeDto,
      },
    );

    return await this.findOne(id);
  }

  async remove(id: number): Promise<MembraneLayerPolymerTypeEntity> {
    const membraneLayerPolymerType = await this.findOne(id);

    try {
      await this.membraneLayerPolymerTypeRepository.delete({ id });
    } catch {
      throw new EntitiesReferException('membrane layer polymer type');
    }

    return membraneLayerPolymerType;
  }
}
