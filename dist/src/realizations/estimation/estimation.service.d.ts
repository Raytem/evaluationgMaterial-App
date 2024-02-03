import { CreateEstimationDto } from './dto/create-estimation.dto';
import { EntityManager, Repository } from 'typeorm';
import { EstimationEntity } from './entities/estimation.entity';
export declare class EstimationService {
    private estimationRepository;
    constructor(estimationRepository: Repository<EstimationEntity>);
    create(createEstimationDto: CreateEstimationDto, manager?: EntityManager): Promise<EstimationEntity>;
}
