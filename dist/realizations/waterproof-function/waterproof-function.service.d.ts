import { CreateWaterproofFunctionDto } from './dto/create-waterproof-function.dto';
import { UpdateWaterproofFunctionDto } from './dto/update-waterproof-function.dto';
export declare class WaterproofFunctionService {
    create(createWaterproofFunctionDto: CreateWaterproofFunctionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWaterproofFunctionDto: UpdateWaterproofFunctionDto): string;
    remove(id: number): string;
}
