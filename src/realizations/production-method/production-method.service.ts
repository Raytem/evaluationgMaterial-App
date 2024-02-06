import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductionMethodDto } from './dto/create-production-method.dto';
import { UpdateProductionMethodDto } from './dto/update-production-method.dto';
import { ProductionMethodEntity } from './entities/production-method.entity';
import { NoSuchException } from 'src/exceptions/no-such.exception';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationService } from 'src/services/pagination/pagination.service';
import { EntitiesReferException } from 'src/exceptions/entities-refer.exception';

@Injectable()
export class ProductionMethodService {
  constructor(
    private paginationService: PaginationService,

    @InjectRepository(ProductionMethodEntity)
    private productionMethodRepository: Repository<ProductionMethodEntity>,
  ) {}

  async create(
    createProductionMethodDto: CreateProductionMethodDto,
  ): Promise<ProductionMethodEntity> {
    let productionMethod;
    try {
      productionMethod = await this.findOne(
        null,
        createProductionMethodDto.name,
      );
    } catch {}

    if (productionMethod) {
      throw new BadRequestException(
        'ProductionMethod with this name already exists',
      );
    }

    const newProductionMethod = await this.productionMethodRepository.save({
      ...createProductionMethodDto,
    });

    return newProductionMethod;
  }

  async findAll(
    paginationDto?: PaginationDto,
  ): Promise<ProductionMethodEntity[]> {
    const pagination = this.paginationService.paginate(paginationDto);

    return await this.productionMethodRepository.find({
      ...pagination,
    });
  }

  async findOne(id: number, name?: string): Promise<ProductionMethodEntity> {
    let productionMethod;

    if (name) {
      productionMethod = await this.productionMethodRepository.findOneBy({
        name,
      });
    } else {
      productionMethod = await this.productionMethodRepository.findOneBy({
        id,
      });
    }

    if (!productionMethod) {
      throw new NoSuchException('production method');
    }

    return productionMethod;
  }

  async update(
    id: number,
    updateProductionMethodDto: UpdateProductionMethodDto,
  ): Promise<ProductionMethodEntity> {
    const productionMethod = await this.findOne(id);

    if (productionMethod) {
      throw new BadRequestException(
        'ProductionMethod with this name already exists',
      );
    }

    await this.productionMethodRepository.update(
      { id },
      {
        ...updateProductionMethodDto,
      },
    );

    return await this.findOne(id);
  }

  async remove(id: number): Promise<ProductionMethodEntity> {
    const productionMethod = await this.findOne(id);

    try {
      await this.productionMethodRepository.delete({ id });
    } catch {
      throw new EntitiesReferException('production method');
    }

    return productionMethod;
  }
}
