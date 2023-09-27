import { ReliabilityFunctionService } from './reliability-function.service';
import { CreateReliabilityFunctionDto } from './dto/create-reliability-function.dto';
import { UpdateReliabilityFunctionDto } from './dto/update-reliability-function.dto';
export declare class ReliabilityFunctionController {
    private readonly reliabilityFunctionService;
    constructor(reliabilityFunctionService: ReliabilityFunctionService);
    create(createReliabilityFunctionDto: CreateReliabilityFunctionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateReliabilityFunctionDto: UpdateReliabilityFunctionDto): string;
    remove(id: string): string;
}
