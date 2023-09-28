import { CreateReliabilityFunctionDto } from './dto/create-reliability-function.dto';
import { UpdateReliabilityFunctionDto } from './dto/update-reliability-function.dto';
export declare class ReliabilityFunctionService {
    create(createReliabilityFunctionDto: CreateReliabilityFunctionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateReliabilityFunctionDto: UpdateReliabilityFunctionDto): string;
    remove(id: number): string;
}
