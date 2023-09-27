import { EstimationService } from './estimation.service';
import { CreateEstimationDto } from './dto/create-estimation.dto';
import { UpdateEstimationDto } from './dto/update-estimation.dto';
export declare class EstimationController {
    private readonly estimationService;
    constructor(estimationService: EstimationService);
    create(createEstimationDto: CreateEstimationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEstimationDto: UpdateEstimationDto): string;
    remove(id: string): string;
}
