import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateAbrasionTypeDto } from './dto/create-abrasion-type.dto';
import { UpdateAbrasionTypeDto } from './dto/update-abrasion-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AbrasionTypeEntity } from './entities/abrasion-type.entity';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
import { PaginationService } from 'src/pagination/pagination.service';
import { Repository } from 'typeorm';
import { NoSuchException } from 'src/exceptions/no-such.exception';

@Injectable()
export class AbrasionTypeService {
  constructor(
    private paginationService: PaginationService,

    @InjectRepository(AbrasionTypeEntity)
    private abrasionTypeRepository: Repository<AbrasionTypeEntity>,
  ) {}

  async create(
    createAbrasionTypeDto: CreateAbrasionTypeDto,
  ): Promise<AbrasionTypeEntity> {
    let abrasionType;
    try {
      abrasionType = await this.findOne(null, createAbrasionTypeDto.name);
    } catch {}

    if (abrasionType) {
      throw new BadRequestException(
        'AbrasionType with this name already exists',
      );
    }

    const newAbrasionType = await this.abrasionTypeRepository.save({
      ...createAbrasionTypeDto,
    });

    return newAbrasionType;
  }

  async findAll(paginationDto: PaginationDto): Promise<AbrasionTypeEntity[]> {
    const pagination = this.paginationService.paginate(paginationDto);

    return await this.abrasionTypeRepository.find({
      ...pagination,
    });
  }

  async findOne(id: number, name?: string): Promise<AbrasionTypeEntity> {
    let abrasionType;

    if (name) {
      abrasionType = await this.abrasionTypeRepository.findOneBy({
        name,
      });
    } else {
      abrasionType = await this.abrasionTypeRepository.findOneBy({
        id,
      });
    }

    if (!abrasionType) {
      throw new NoSuchException('abrasion type');
    }

    return abrasionType;
  }

  async update(
    id: number,
    updateAbrasionTypeDto: UpdateAbrasionTypeDto,
  ): Promise<AbrasionTypeEntity> {
    await this.findOne(id);

    await this.abrasionTypeRepository.update(
      { id },
      {
        ...updateAbrasionTypeDto,
      },
    );

    return await this.findOne(id);
  }

  async remove(id: number): Promise<AbrasionTypeEntity> {
    const abrasionType = await this.findOne(id);

    await this.abrasionTypeRepository.delete({ id });

    return abrasionType;
  }
}
