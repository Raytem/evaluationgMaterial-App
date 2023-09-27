import { ConditionService } from './condition.service';
import { CreateConditionDto } from './dto/create-condition.dto';
import { UpdateConditionDto } from './dto/update-condition.dto';
export declare class ConditionController {
    private readonly conditionService;
    constructor(conditionService: ConditionService);
    create(createConditionDto: CreateConditionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateConditionDto: UpdateConditionDto): string;
    remove(id: string): string;
}
