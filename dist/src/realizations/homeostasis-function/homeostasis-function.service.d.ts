import { CreateHomeostasisFunctionDto } from './dto/create-homeostasis-function.dto';
import { UpdateHomeostasisFunctionDto } from './dto/update-homeostasis-function.dto';
export declare class HomeostasisFunctionService {
    create(createHomeostasisFunctionDto: CreateHomeostasisFunctionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHomeostasisFunctionDto: UpdateHomeostasisFunctionDto): string;
    remove(id: number): string;
}
