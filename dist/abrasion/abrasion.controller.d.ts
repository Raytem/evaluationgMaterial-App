import { AbrasionService } from './abrasion.service';
import { CreateAbrasionDto } from './dto/create-abrasion.dto';
import { UpdateAbrasionDto } from './dto/update-abrasion.dto';
export declare class AbrasionController {
    private readonly abrasionService;
    constructor(abrasionService: AbrasionService);
    create(createAbrasionDto: CreateAbrasionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAbrasionDto: UpdateAbrasionDto): string;
    remove(id: string): string;
}
