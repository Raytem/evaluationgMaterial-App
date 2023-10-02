import { Injectable } from '@nestjs/common';
import { CreateEstimationDto } from './dto/create-estimation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstimationEntity } from './entities/estimation.entity';

@Injectable()
export class EstimationService {
  constructor(
    @InjectRepository(EstimationEntity)
    private estimationRepository: Repository<EstimationEntity>,
  ) {}
  async create(
    createEstimationDto: CreateEstimationDto,
  ): Promise<EstimationEntity> {
    return await this.estimationRepository.save(createEstimationDto);
  }
}
