import { WaterproofFunctionService } from './waterproof-function.service';
import { CreateWaterproofFunctionDto } from './dto/create-waterproof-function.dto';
import { UpdateWaterproofFunctionDto } from './dto/update-waterproof-function.dto';
export declare class WaterproofFunctionController {
    private readonly waterproofFunctionService;
    constructor(waterproofFunctionService: WaterproofFunctionService);
    create(createWaterproofFunctionDto: CreateWaterproofFunctionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWaterproofFunctionDto: UpdateWaterproofFunctionDto): string;
    remove(id: string): string;
}
