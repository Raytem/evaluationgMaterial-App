import { TorsionService } from './torsion.service';
import { CreateTorsionDto } from './dto/create-torsion.dto';
import { UpdateTorsionDto } from './dto/update-torsion.dto';
export declare class TorsionController {
    private readonly torsionService;
    constructor(torsionService: TorsionService);
    create(createTorsionDto: CreateTorsionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTorsionDto: UpdateTorsionDto): string;
    remove(id: string): string;
}
