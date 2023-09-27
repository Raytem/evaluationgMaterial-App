import { CreateEstimationDto } from './dto/create-estimation.dto';
import { UpdateEstimationDto } from './dto/update-estimation.dto';
export declare class EstimationService {
    create(createEstimationDto: CreateEstimationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEstimationDto: UpdateEstimationDto): string;
    remove(id: number): string;
}
