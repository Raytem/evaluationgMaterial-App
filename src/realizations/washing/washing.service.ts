import { Injectable } from '@nestjs/common';
import { CreateWashingDto } from './dto/create-washing.dto';
import { WashingTypeService } from '../washing-type/washing-type.service';
import { InjectRepository } from '@nestjs/typeorm';
import { WashingEntity } from './entities/washing.entity';
import { Repository } from 'typeorm';
import { WashingTypeEntity } from '../washing-type/entities/washing-type.entity';

@Injectable()
export class WashingService {
  constructor(
    private washingTypeService: WashingTypeService,

    @InjectRepository(WashingEntity)
    private washingRepository: Repository<WashingEntity>,
  ) {}
  async create(
    createWashingDto: CreateWashingDto,
    washingType?: WashingTypeEntity,
  ) {
    if (!washingType) {
      try {
        washingType = await this.washingTypeService.findOne(
          createWashingDto.washingType_id,
        );
      } catch (e) {
        throw e;
      }
    }

    const washing = await this.washingRepository.save({
      ...createWashingDto,
      washingType: washingType,
    });

    return await this.washingRepository.findOneBy({ id: washing.id });
  }
}
