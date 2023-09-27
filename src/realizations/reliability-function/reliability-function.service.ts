import { Injectable } from '@nestjs/common';
import { CreateReliabilityFunctionDto } from './dto/create-reliability-function.dto';
import { UpdateReliabilityFunctionDto } from './dto/update-reliability-function.dto';

@Injectable()
export class ReliabilityFunctionService {
  create(createReliabilityFunctionDto: CreateReliabilityFunctionDto) {
    return 'This action adds a new reliabilityFunction';
  }

  findAll() {
    return `This action returns all reliabilityFunction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reliabilityFunction`;
  }

  update(id: number, updateReliabilityFunctionDto: UpdateReliabilityFunctionDto) {
    return `This action updates a #${id} reliabilityFunction`;
  }

  remove(id: number) {
    return `This action removes a #${id} reliabilityFunction`;
  }
}
