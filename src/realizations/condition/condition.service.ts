import { Injectable } from '@nestjs/common';
import { CreateConditionDto } from './dto/create-condition.dto';
import { UpdateConditionDto } from './dto/update-condition.dto';
import { ConditionEntity } from './entities/condition.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AbrasionTypeService } from '../abrasion-type/abrasion-type.service';
import { BendingTypeService } from '../bending-type/bending-type.service';
import { PhysicalActivityTypeService } from '../physical-activity-type/physical-activity-type.service';
import { WashingTypeService } from '../washing-type/washing-type.service';
import { WashingService } from '../washing/washing.service';

@Injectable()
export class ConditionService {
  constructor(
    @InjectRepository(ConditionEntity)
    private conditionRepository: Repository<ConditionEntity>,

    private washingService: WashingService,

    private abrasionTypeService: AbrasionTypeService,

    private bendingTypeService: BendingTypeService,

    private physicalActivityTypeService: PhysicalActivityTypeService,

    private washingTypeService: WashingTypeService,
  ) {}

  async create(createConditionDto: CreateConditionDto, manager: EntityManager) {
    try {
      let abrasionType;
      if (createConditionDto.abrasionType_id) {
        abrasionType = await this.abrasionTypeService.findOne(createConditionDto.abrasionType_id);
      }

      let bendingType;
      if (createConditionDto.bendingType_id) {
        bendingType = await this.bendingTypeService.findOne(createConditionDto.bendingType_id);
      }

      let washing;
      if (createConditionDto.washing) {
        const washingType = await this.washingTypeService.findOne(createConditionDto.washing.washingType_id);

        washing = await this.washingService.create(createConditionDto.washing, washingType, manager);
      }

      const physicalActivityType = await this.physicalActivityTypeService.findOne(
        createConditionDto.physicalActivityType_id,
      );

      const partialConditionEntity = this.conditionRepository.create({
        ...createConditionDto,
        washing,
        abrasionType,
        bendingType,
        physicalActivityType,
      });

      if (manager) {
        return await manager.withRepository(this.conditionRepository).save(partialConditionEntity);
      } else {
        return await this.conditionRepository.save(partialConditionEntity);
      }
    } catch (e) {
      throw e;
    }
  }
}
