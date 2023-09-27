import { HomeostasisFunctionService } from './homeostasis-function.service';
import { CreateHomeostasisFunctionDto } from './dto/create-homeostasis-function.dto';
import { UpdateHomeostasisFunctionDto } from './dto/update-homeostasis-function.dto';
export declare class HomeostasisFunctionController {
    private readonly homeostasisFunctionService;
    constructor(homeostasisFunctionService: HomeostasisFunctionService);
    create(createHomeostasisFunctionDto: CreateHomeostasisFunctionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHomeostasisFunctionDto: UpdateHomeostasisFunctionDto): string;
    remove(id: string): string;
}
