import { Injectable } from '@nestjs/common';
import { CreateHomeostasisFunctionDto } from './dto/create-homeostasis-function.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HomeostasisFunctionEntity } from './entities/homeostasis-function.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HomeostasisFunctionService {
  constructor(
    @InjectRepository(HomeostasisFunctionEntity)
    private homeostasisFunctionRepository: Repository<HomeostasisFunctionEntity>,
  ) {}
  async create(
    createHomeostasisFunctionDto: CreateHomeostasisFunctionDto,
  ): Promise<HomeostasisFunctionEntity> {
    return await this.homeostasisFunctionRepository.save(
      createHomeostasisFunctionDto,
    );
  }
}
