import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBendingTypeDto } from './dto/create-bending-type.dto';
import { UpdateBendingTypeDto } from './dto/update-bending-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BendingTypeEntity } from './entities/bending-type.entity';
import { PaginationService } from 'src/services/pagination/pagination.service';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import { NoSuchException } from 'src/exceptions/no-such.exception';
import { EntitiesReferException } from 'src/exceptions/entities-refer.exception';

@Injectable()
export class BendingTypeService {
  constructor(
    private paginationService: PaginationService,

    @InjectRepository(BendingTypeEntity)
    private bendingTypeRepository: Repository<BendingTypeEntity>,
  ) {}

  async create(createBendingTypeDto: CreateBendingTypeDto): Promise<BendingTypeEntity> {
    let bendingType;
    try {
      bendingType = await this.findOne(null, createBendingTypeDto.name);
    } catch {}

    if (bendingType) {
      throw new BadRequestException('BendingType with this name already exists');
    }

    const newBendingType = await this.bendingTypeRepository.save({
      ...createBendingTypeDto,
    });

    return newBendingType;
  }

  async findAll(paginationDto?: PaginationDto): Promise<BendingTypeEntity[]> {
    const pagination = this.paginationService.paginate(paginationDto);

    return await this.bendingTypeRepository.find({
      ...pagination,
    });
  }

  async findOne(id: number, name?: string): Promise<BendingTypeEntity> {
    let bendingType;

    if (name) {
      bendingType = await this.bendingTypeRepository.findOneBy({
        name,
      });
    } else if (id) {
      bendingType = await this.bendingTypeRepository.findOneBy({
        id,
      });
    }

    if (!bendingType) {
      throw new NoSuchException('bending type');
    }

    return bendingType;
  }

  async update(id: number, updateBendingTypeDto: UpdateBendingTypeDto): Promise<BendingTypeEntity> {
    const bendingType = await this.findOne(id);

    const bendingTypeByName = await this.bendingTypeRepository.findOneBy({
      name: updateBendingTypeDto.name,
    });

    if (bendingTypeByName && bendingType.id !== bendingTypeByName.id) {
      throw new BadRequestException('BendingType with this name already exists');
    }

    await this.bendingTypeRepository.update(
      { id },
      {
        ...updateBendingTypeDto,
      },
    );

    return await this.findOne(id);
  }

  async remove(id: number): Promise<BendingTypeEntity> {
    const bendingType = await this.findOne(id);
    try {
      await this.bendingTypeRepository.delete({ id });
    } catch {
      throw new EntitiesReferException('bending type');
    }

    return bendingType;
  }
}
