import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePhysicalActivityTypeDto } from './dto/create-physical-activity-type.dto';
import { UpdatePhysicalActivityTypeDto } from './dto/update-physical-activity-type.dto';
import { PhysicalActivityTypeEntity } from './entities/physical-activity-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationService } from 'src/services/pagination/pagination.service';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import { NoSuchException } from 'src/exceptions/no-such.exception';
import { EntitiesReferException } from 'src/exceptions/entities-refer.exception';

@Injectable()
export class PhysicalActivityTypeService {
  constructor(
    private paginationService: PaginationService,

    @InjectRepository(PhysicalActivityTypeEntity)
    private physicalActivityTypeRepository: Repository<PhysicalActivityTypeEntity>,
  ) {}

  async create(
    createPhysicalActivityTypeDto: CreatePhysicalActivityTypeDto,
  ): Promise<PhysicalActivityTypeEntity> {
    let physicalActivityType;
    try {
      physicalActivityType = await this.findOne(
        null,
        createPhysicalActivityTypeDto.name,
      );
    } catch {}

    if (physicalActivityType) {
      throw new BadRequestException(
        'PhysicalActivityType with this name already exists',
      );
    }

    const newPhysicalActivityType =
      await this.physicalActivityTypeRepository.save({
        ...createPhysicalActivityTypeDto,
      });

    return newPhysicalActivityType;
  }

  async findAll(
    paginationDto: PaginationDto,
  ): Promise<PhysicalActivityTypeEntity[]> {
    const pagination = this.paginationService.paginate(paginationDto);

    return await this.physicalActivityTypeRepository.find({
      ...pagination,
    });
  }

  async findOne(
    id: number,
    name?: string,
  ): Promise<PhysicalActivityTypeEntity> {
    let physicalActivityType;

    if (name) {
      physicalActivityType =
        await this.physicalActivityTypeRepository.findOneBy({
          name,
        });
    } else {
      physicalActivityType =
        await this.physicalActivityTypeRepository.findOneBy({
          id,
        });
    }

    if (!physicalActivityType) {
      throw new NoSuchException('physical activity type');
    }

    return physicalActivityType;
  }

  async update(
    id: number,
    updatePhysicalActivityTypeDto: UpdatePhysicalActivityTypeDto,
  ): Promise<PhysicalActivityTypeEntity> {
    await this.findOne(id);

    await this.physicalActivityTypeRepository.update(
      { id },
      {
        ...updatePhysicalActivityTypeDto,
      },
    );

    return await this.findOne(id);
  }

  async remove(id: number): Promise<PhysicalActivityTypeEntity> {
    const physicalActivityType = await this.findOne(id);

    try {
      await this.physicalActivityTypeRepository.delete({ id });
    } catch {
      throw new EntitiesReferException('physical activity type');
    }

    return physicalActivityType;
  }
}
