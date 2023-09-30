import { CreateConditionDto } from './dto/create-condition.dto';
import { ConditionEntity } from './entities/condition.entity';
import { Repository } from 'typeorm';
import { AbrasionTypeService } from '../abrasion-type/abrasion-type.service';
import { BendingTypeService } from '../bending-type/bending-type.service';
import { PhysicalActivityTypeService } from '../physical-activity-type/physical-activity-type.service';
import { WashingTypeService } from '../washing-type/washing-type.service';
import { WashingService } from '../washing/washing.service';
export declare class ConditionService {
    private conditionRepository;
    private washingService;
    private abrasionTypeService;
    private bendingTypeService;
    private physicalActivityTypeService;
    private washingTypeService;
    constructor(conditionRepository: Repository<ConditionEntity>, washingService: WashingService, abrasionTypeService: AbrasionTypeService, bendingTypeService: BendingTypeService, physicalActivityTypeService: PhysicalActivityTypeService, washingTypeService: WashingTypeService);
    create(createConditionDto: CreateConditionDto): Promise<{
        washing: import("../washing/entities/washing.entity").WashingEntity;
        abrasionType: import("../abrasion-type/entities/abrasion-type.entity").AbrasionTypeEntity;
        bendingType: import("../bending-type/entities/bending-type.entity").BendingTypeEntity;
        physicalActivityType: import("../physical-activity-type/entities/physical-activity-type.entity").PhysicalActivityTypeEntity;
        bendingType_id: number;
        abrasionType_id: number;
        physicalActivityType_id: number;
        isPositive: boolean;
        minAirTemp: number;
        maxAirHumidity: number;
        avgAirSpeed: number;
        residenceTime: number;
        torsionAngle: number;
        stretchingCompression: number;
    } & ConditionEntity>;
}
