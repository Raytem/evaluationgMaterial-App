import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGlueTypeDto } from './dto/create-glue-type.dto';
import { UpdateGlueTypeDto } from './dto/update-glue-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GlueTypeEntity } from './entities/glue-type.entity';
import { NoSuchException } from 'src/exceptions/no-such.exception';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import { Repository } from 'typeorm';
import { PaginationService } from 'src/services/pagination/pagination.service';
import { EntitiesReferException } from 'src/exceptions/entities-refer.exception';

@Injectable()
export class GlueTypeService {
  constructor(
    private paginationService: PaginationService,

    @InjectRepository(GlueTypeEntity)
    private glueTypeRepository: Repository<GlueTypeEntity>,
  ) {}

  async create(createGlueTypeDto: CreateGlueTypeDto): Promise<GlueTypeEntity> {
    let glueType;
    try {
      glueType = await this.findOne(null, createGlueTypeDto.name);
    } catch {}

    if (glueType) {
      throw new BadRequestException('GlueType with this name already exists');
    }

    const newGlueType = await this.glueTypeRepository.save({
      ...createGlueTypeDto,
    });

    return newGlueType;
  }

  async findAll(paginationDto?: PaginationDto): Promise<GlueTypeEntity[]> {
    const pagination = this.paginationService.paginate(paginationDto);

    return await this.glueTypeRepository.find({
      ...pagination,
    });
  }

  async findOne(id: number, name?: string): Promise<GlueTypeEntity> {
    let glueType;

    if (name) {
      glueType = await this.glueTypeRepository.findOneBy({
        name,
      });
    } else {
      glueType = await this.glueTypeRepository.findOneBy({
        id,
      });
    }

    if (!glueType) {
      throw new NoSuchException('glue type');
    }

    return glueType;
  }

  async update(
    id: number,
    updateGlueTypeDto: UpdateGlueTypeDto,
  ): Promise<GlueTypeEntity> {
    await this.findOne(id);

    await this.glueTypeRepository.update(
      { id },
      {
        ...updateGlueTypeDto,
      },
    );

    return await this.findOne(id);
  }

  async remove(id: number): Promise<GlueTypeEntity> {
    const glueType = await this.findOne(id);
    try {
      await this.glueTypeRepository.delete({ id });
    } catch {
      throw new EntitiesReferException('glue type');
    }

    return glueType;
  }
}
