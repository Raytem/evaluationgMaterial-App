import { BendingService } from './bending.service';
import { CreateBendingDto } from './dto/create-bending.dto';
import { UpdateBendingDto } from './dto/update-bending.dto';
export declare class BendingController {
    private readonly bendingService;
    constructor(bendingService: BendingService);
    create(createBendingDto: CreateBendingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBendingDto: UpdateBendingDto): string;
    remove(id: string): string;
}
