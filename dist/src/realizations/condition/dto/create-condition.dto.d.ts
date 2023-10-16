import { ConditionEntity } from '../entities/condition.entity';
import { CreateWashingDto } from 'src/realizations/washing/dto/create-washing.dto';
declare const CreateConditionDto_base: import("@nestjs/common").Type<Omit<ConditionEntity, "material" | "abrasionType" | "washing" | "bendingType" | "physicalActivityType" | "id">>;
export declare class CreateConditionDto extends CreateConditionDto_base {
    washing: CreateWashingDto;
    bendingType_id: number;
    abrasionType_id: number;
    physicalActivityType_id: number;
}
export {};
