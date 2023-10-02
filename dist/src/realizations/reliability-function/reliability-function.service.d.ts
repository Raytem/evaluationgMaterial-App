import { CreateReliabilityFunctionDto } from './dto/create-reliability-function.dto';
import { Repository } from 'typeorm';
import { ReliabilityFunctionEntity } from './entities/reliability-function.entity';
export declare class ReliabilityFunctionService {
    private reliabilityFunctionRepository;
    constructor(reliabilityFunctionRepository: Repository<ReliabilityFunctionEntity>);
    create(createReliabilityFunctionDto: CreateReliabilityFunctionDto): Promise<ReliabilityFunctionEntity>;
}
