import { Injectable } from '@nestjs/common';
import { CreateWashingDto } from './dto/create-washing.dto';
import { UpdateWashingDto } from './dto/update-washing.dto';

@Injectable()
export class WashingService {
  create(createWashingDto: CreateWashingDto) {
    return 'This action adds a new washing';
  }

  findAll() {
    return `This action returns all washing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} washing`;
  }

  update(id: number, updateWashingDto: UpdateWashingDto) {
    return `This action updates a #${id} washing`;
  }

  remove(id: number) {
    return `This action removes a #${id} washing`;
  }
}
