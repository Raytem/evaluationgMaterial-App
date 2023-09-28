import { MaterialService } from './material.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
export declare class MaterialController {
    private readonly materialService;
    constructor(materialService: MaterialService);
    create(createMaterialDto: CreateMaterialDto): string;
    findAll(paginationDto: PaginationDto): string;
    findOne(id: string): string;
    remove(id: string): string;
}
