import { Injectable } from '@nestjs/common';
import { CreateEstimationDto } from './dto/create-estimation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { EstimationEntity } from './entities/estimation.entity';

@Injectable()
export class EstimationService {
  constructor(
    @InjectRepository(EstimationEntity)
    private estimationRepository: Repository<EstimationEntity>,
  ) {}
  async create(
    createEstimationDto: CreateEstimationDto,
    manager?: EntityManager,
  ): Promise<EstimationEntity> {
    if (manager) {
      return manager
        .withRepository(this.estimationRepository)
        .save(createEstimationDto);
    } else {
      return await this.estimationRepository.save(createEstimationDto);
    }
  }
}
