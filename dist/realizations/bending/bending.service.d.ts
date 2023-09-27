import { CreateBendingDto } from './dto/create-bending.dto';
import { UpdateBendingDto } from './dto/update-bending.dto';
export declare class BendingService {
    create(createBendingDto: CreateBendingDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBendingDto: UpdateBendingDto): string;
    remove(id: number): string;
}
