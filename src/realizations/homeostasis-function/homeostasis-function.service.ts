import { Injectable } from '@nestjs/common';
import { CreateHomeostasisFunctionDto } from './dto/create-homeostasis-function.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HomeostasisFunctionEntity } from './entities/homeostasis-function.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class HomeostasisFunctionService {
  constructor(
    @InjectRepository(HomeostasisFunctionEntity)
    private homeostasisFunctionRepository: Repository<HomeostasisFunctionEntity>,
  ) {}
  async create(
    createHomeostasisFunctionDto: CreateHomeostasisFunctionDto,
    manager?: EntityManager,
  ): Promise<HomeostasisFunctionEntity> {
    if (manager) {
      return await manager
        .withRepository(this.homeostasisFunctionRepository)
        .save(createHomeostasisFunctionDto);
    } else {
      return await this.homeostasisFunctionRepository.save(
        createHomeostasisFunctionDto,
      );
    }
  }
}
