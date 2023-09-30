import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WaterproofFunctionEntity } from './entities/waterproof-function.entity';
import { Repository } from 'typeorm';
import { CreateWaterproofFunctionDto } from './dto/create-waterproof-function.dto';

@Injectable()
export class WaterproofFunctionService {
  constructor(
    @InjectRepository(WaterproofFunctionEntity)
    private waterProofFunctionRepository: Repository<WaterproofFunctionEntity>,
  ) {}
  async create(createWaterproofFunctionDto: CreateWaterproofFunctionDto) {
    return await this.waterProofFunctionRepository.create(
      createWaterproofFunctionDto,
    );
  }
}
