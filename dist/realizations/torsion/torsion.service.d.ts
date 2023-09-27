import { CreateTorsionDto } from './dto/create-torsion.dto';
import { UpdateTorsionDto } from './dto/update-torsion.dto';
export declare class TorsionService {
    create(createTorsionDto: CreateTorsionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTorsionDto: UpdateTorsionDto): string;
    remove(id: number): string;
}
