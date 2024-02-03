import { Injectable } from '@nestjs/common';
import { CreateReliabilityFunctionDto } from './dto/create-reliability-function.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { ReliabilityFunctionEntity } from './entities/reliability-function.entity';

@Injectable()
export class ReliabilityFunctionService {
  constructor(
    @InjectRepository(ReliabilityFunctionEntity)
    private reliabilityFunctionRepository: Repository<ReliabilityFunctionEntity>,
  ) {}

  async create(
    createReliabilityFunctionDto: CreateReliabilityFunctionDto,
    manager?: EntityManager,
  ): Promise<ReliabilityFunctionEntity> {
    if (manager) {
      return await manager
        .withRepository(this.reliabilityFunctionRepository)
        .save(createReliabilityFunctionDto);
    } else {
      return await this.reliabilityFunctionRepository.save(
        createReliabilityFunctionDto,
      );
    }
  }
}
