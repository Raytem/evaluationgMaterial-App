import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateWashingTypeDto } from './dto/create-washing-type.dto';
import { UpdateWashingTypeDto } from './dto/update-washing-type.dto';
import { PaginationService } from 'src/pagination/pagination.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WashingTypeEntity } from './entities/washing-type.entity';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
import { NoSuchException } from 'src/exceptions/no-such.exception';
import { EntitiesReferException } from 'src/exceptions/entities-refer.exception';

@Injectable()
export class WashingTypeService {
  constructor(
    private paginationService: PaginationService,

    @InjectRepository(WashingTypeEntity)
    private washingTypeRepository: Repository<WashingTypeEntity>,
  ) {}

  async create(
    createWashingTypeDto: CreateWashingTypeDto,
  ): Promise<WashingTypeEntity> {
    let washingType;
    try {
      washingType = await this.findOne(null, createWashingTypeDto.name);
    } catch {}

    if (washingType) {
      throw new BadRequestException(
        'WashingType with this name already exists',
      );
    }

    const newWashingType = await this.washingTypeRepository.save({
      ...createWashingTypeDto,
    });

    return newWashingType;
  }

  async findAll(paginationDto: PaginationDto): Promise<WashingTypeEntity[]> {
    const pagination = this.paginationService.paginate(paginationDto);

    return await this.washingTypeRepository.find({
      ...pagination,
    });
  }

  async findOne(id: number, name?: string): Promise<WashingTypeEntity> {
    let washingType;

    if (name) {
      washingType = await this.washingTypeRepository.findOneBy({
        name,
      });
    } else {
      washingType = await this.washingTypeRepository.findOneBy({
        id,
      });
    }

    if (!washingType) {
      throw new NoSuchException('washing type');
    }

    return washingType;
  }

  async update(
    id: number,
    updateWashingTypeDto: UpdateWashingTypeDto,
  ): Promise<WashingTypeEntity> {
    await this.findOne(id);

    await this.washingTypeRepository.update(
      { id },
      {
        ...updateWashingTypeDto,
      },
    );

    return await this.findOne(id);
  }

  async remove(id: number): Promise<WashingTypeEntity> {
    const washingType = await this.findOne(id);

    try {
      await this.washingTypeRepository.delete({ id });
    } catch {
      throw new EntitiesReferException('washing type');
    }

    return washingType;
  }
}
