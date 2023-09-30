import { Injectable } from '@nestjs/common';
import { CreateReliabilityFunctionDto } from './dto/create-reliability-function.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReliabilityFunctionEntity } from './entities/reliability-function.entity';

@Injectable()
export class ReliabilityFunctionService {
  constructor(
    @InjectRepository(ReliabilityFunctionEntity)
    private reliabilityFunctionRepository: Repository<ReliabilityFunctionEntity>,
  ) {}

  async create(createReliabilityFunctionDto: CreateReliabilityFunctionDto) {
    return await this.reliabilityFunctionRepository.save(
      createReliabilityFunctionDto,
    );
  }
}
