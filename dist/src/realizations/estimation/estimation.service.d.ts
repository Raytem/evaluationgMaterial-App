import { CreateEstimationDto } from './dto/create-estimation.dto';
import { Repository } from 'typeorm';
import { EstimationEntity } from './entities/estimation.entity';
export declare class EstimationService {
    private estimationRepository;
    constructor(estimationRepository: Repository<EstimationEntity>);
    create(createEstimationDto: CreateEstimationDto): Promise<EstimationEntity>;
}
