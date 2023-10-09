import { CreateProductionMethodDto } from './dto/create-production-method.dto';
import { UpdateProductionMethodDto } from './dto/update-production-method.dto';
import { ProductionMethodEntity } from './entities/production-method.entity';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import { Repository } from 'typeorm';
import { PaginationService } from 'src/services/pagination/pagination.service';
export declare class ProductionMethodService {
    private paginationService;
    private productionMethodRepository;
    constructor(paginationService: PaginationService, productionMethodRepository: Repository<ProductionMethodEntity>);
    create(createProductionMethodDto: CreateProductionMethodDto): Promise<ProductionMethodEntity>;
    findAll(paginationDto?: PaginationDto): Promise<ProductionMethodEntity[]>;
    findOne(id: number, name?: string): Promise<ProductionMethodEntity>;
    update(id: number, updateProductionMethodDto: UpdateProductionMethodDto): Promise<ProductionMethodEntity>;
    remove(id: number): Promise<ProductionMethodEntity>;
}
