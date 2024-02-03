import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WaterproofFunctionEntity } from './entities/waterproof-function.entity';
import { EntityManager, Repository } from 'typeorm';
import { CreateWaterproofFunctionDto } from './dto/create-waterproof-function.dto';

@Injectable()
export class WaterproofFunctionService {
  constructor(
    @InjectRepository(WaterproofFunctionEntity)
    private waterProofFunctionRepository: Repository<WaterproofFunctionEntity>,
  ) {}
  async create(
    createWaterproofFunctionDto: CreateWaterproofFunctionDto,
    manager?: EntityManager,
  ): Promise<WaterproofFunctionEntity> {
    if (manager) {
      return await manager
        .withRepository(this.waterProofFunctionRepository)
        .save(createWaterproofFunctionDto);
    } else {
      return await this.waterProofFunctionRepository.save(
        createWaterproofFunctionDto,
      );
    }
    
  }
}
