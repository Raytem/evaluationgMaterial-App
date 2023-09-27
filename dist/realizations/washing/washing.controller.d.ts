import { WashingService } from './washing.service';
import { CreateWashingDto } from './dto/create-washing.dto';
import { UpdateWashingDto } from './dto/update-washing.dto';
export declare class WashingController {
    private readonly washingService;
    constructor(washingService: WashingService);
    create(createWashingDto: CreateWashingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWashingDto: UpdateWashingDto): string;
    remove(id: string): string;
}
