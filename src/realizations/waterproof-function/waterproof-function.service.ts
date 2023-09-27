import { Injectable } from '@nestjs/common';
import { CreateWaterproofFunctionDto } from './dto/create-waterproof-function.dto';
import { UpdateWaterproofFunctionDto } from './dto/update-waterproof-function.dto';

@Injectable()
export class WaterproofFunctionService {
  create(createWaterproofFunctionDto: CreateWaterproofFunctionDto) {
    return 'This action adds a new waterproofFunction';
  }

  findAll() {
    return `This action returns all waterproofFunction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} waterproofFunction`;
  }

  update(id: number, updateWaterproofFunctionDto: UpdateWaterproofFunctionDto) {
    return `This action updates a #${id} waterproofFunction`;
  }

  remove(id: number) {
    return `This action removes a #${id} waterproofFunction`;
  }
}
