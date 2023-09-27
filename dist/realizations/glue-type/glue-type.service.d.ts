import { CreateGlueTypeDto } from './dto/create-glue-type.dto';
import { UpdateGlueTypeDto } from './dto/update-glue-type.dto';
import { GlueTypeEntity } from './entities/glue-type.entity';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
import { Repository } from 'typeorm';
import { PaginationService } from 'src/pagination/pagination.service';
export declare class GlueTypeService {
    private paginationService;
    private glueTypeRepository;
    constructor(paginationService: PaginationService, glueTypeRepository: Repository<GlueTypeEntity>);
    create(createGlueTypeDto: CreateGlueTypeDto): Promise<GlueTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<GlueTypeEntity[]>;
    findOne(id: number, name?: string): Promise<GlueTypeEntity>;
    update(id: number, updateGlueTypeDto: UpdateGlueTypeDto): Promise<GlueTypeEntity>;
    remove(id: number): Promise<GlueTypeEntity>;
}
