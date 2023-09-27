import { Injectable } from '@nestjs/common';
import { CreateHomeostasisFunctionDto } from './dto/create-homeostasis-function.dto';
import { UpdateHomeostasisFunctionDto } from './dto/update-homeostasis-function.dto';

@Injectable()
export class HomeostasisFunctionService {
  create(createHomeostasisFunctionDto: CreateHomeostasisFunctionDto) {
    return 'This action adds a new homeostasisFunction';
  }

  findAll() {
    return `This action returns all homeostasisFunction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} homeostasisFunction`;
  }

  update(id: number, updateHomeostasisFunctionDto: UpdateHomeostasisFunctionDto) {
    return `This action updates a #${id} homeostasisFunction`;
  }

  remove(id: number) {
    return `This action removes a #${id} homeostasisFunction`;
  }
}
