import { CreateConditionDto } from './dto/create-condition.dto';
import { UpdateConditionDto } from './dto/update-condition.dto';
export declare class ConditionService {
    create(createConditionDto: CreateConditionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateConditionDto: UpdateConditionDto): string;
    remove(id: number): string;
}
