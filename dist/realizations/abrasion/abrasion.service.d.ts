import { CreateAbrasionDto } from './dto/create-abrasion.dto';
import { UpdateAbrasionDto } from './dto/update-abrasion.dto';
export declare class AbrasionService {
    create(createAbrasionDto: CreateAbrasionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAbrasionDto: UpdateAbrasionDto): string;
    remove(id: number): string;
}
