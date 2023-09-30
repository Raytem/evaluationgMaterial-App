import { GlueTypeService } from './glue-type.service';
import { CreateGlueTypeDto } from './dto/create-glue-type.dto';
import { UpdateGlueTypeDto } from './dto/update-glue-type.dto';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import { GlueTypeEntity } from './entities/glue-type.entity';
export declare class GlueTypeController {
    private readonly glueTypeService;
    constructor(glueTypeService: GlueTypeService);
    create(createAbrasionTypeDto: CreateGlueTypeDto): Promise<GlueTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<GlueTypeEntity[]>;
    findOne(id: number): Promise<GlueTypeEntity>;
    update(id: number, updateAbrasionTypeDto: UpdateGlueTypeDto): Promise<GlueTypeEntity>;
    remove(id: number): Promise<GlueTypeEntity>;
}
