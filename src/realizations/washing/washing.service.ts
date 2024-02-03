import { Injectable } from '@nestjs/common';
import { CreateWashingDto } from './dto/create-washing.dto';
import { WashingTypeService } from '../washing-type/washing-type.service';
import { InjectRepository } from '@nestjs/typeorm';
import { WashingEntity } from './entities/washing.entity';
import { EntityManager, Repository } from 'typeorm';
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
    manager?: EntityManager,
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

    const partialWashingEntity = {
      ...createWashingDto,
      washingType: washingType,
    };

    let washing;
    if (manager) {
      washing = await manager
        .withRepository(this.washingRepository)
        .save(partialWashingEntity);
    } else {
      washing = await this.washingRepository.save(partialWashingEntity);
    }

    return washing;
  }
}
