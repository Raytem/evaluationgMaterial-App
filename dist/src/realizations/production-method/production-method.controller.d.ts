import { ProductionMethodService } from './production-method.service';
import { CreateProductionMethodDto } from './dto/create-production-method.dto';
import { UpdateProductionMethodDto } from './dto/update-production-method.dto';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import { ProductionMethodEntity } from './entities/production-method.entity';
export declare class ProductionMethodController {
    private readonly productionMethodService;
    constructor(productionMethodService: ProductionMethodService);
    create(createAbrasionTypeDto: CreateProductionMethodDto): Promise<ProductionMethodEntity>;
    findAll(paginationDto: PaginationDto): Promise<ProductionMethodEntity[]>;
    findOne(id: number): Promise<ProductionMethodEntity>;
    update(id: number, updateAbrasionTypeDto: UpdateProductionMethodDto): Promise<ProductionMethodEntity>;
    remove(id: number): Promise<ProductionMethodEntity>;
}
