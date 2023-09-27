import { CreateWashingDto } from './dto/create-washing.dto';
import { UpdateWashingDto } from './dto/update-washing.dto';
export declare class WashingService {
    create(createWashingDto: CreateWashingDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWashingDto: UpdateWashingDto): string;
    remove(id: number): string;
}
