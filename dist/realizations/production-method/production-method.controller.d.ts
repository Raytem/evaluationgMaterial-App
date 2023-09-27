import { ProductionMethodService } from './production-method.service';
import { CreateProductionMethodDto } from './dto/create-production-method.dto';
import { UpdateProductionMethodDto } from './dto/update-production-method.dto';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
export declare class ProductionMethodController {
    private readonly productionMethodService;
    constructor(productionMethodService: ProductionMethodService);
    create(createAbrasionTypeDto: CreateProductionMethodDto): Promise<import("./entities/production-method.entity").ProductionMethodEntity>;
    findAll(paginationDto: PaginationDto): Promise<import("./entities/production-method.entity").ProductionMethodEntity[]>;
    findOne(id: number): Promise<import("./entities/production-method.entity").ProductionMethodEntity>;
    update(id: number, updateAbrasionTypeDto: UpdateProductionMethodDto): Promise<import("./entities/production-method.entity").ProductionMethodEntity>;
    remove(id: number): Promise<import("./entities/production-method.entity").ProductionMethodEntity>;
}
