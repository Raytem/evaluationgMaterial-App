import { GlueTypeService } from './glue-type.service';
import { CreateGlueTypeDto } from './dto/create-glue-type.dto';
import { UpdateGlueTypeDto } from './dto/update-glue-type.dto';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
export declare class GlueTypeController {
    private readonly glueTypeService;
    constructor(glueTypeService: GlueTypeService);
    create(createAbrasionTypeDto: CreateGlueTypeDto): Promise<import("./entities/glue-type.entity").GlueTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<import("./entities/glue-type.entity").GlueTypeEntity[]>;
    findOne(id: number): Promise<import("./entities/glue-type.entity").GlueTypeEntity>;
    update(id: number, updateAbrasionTypeDto: UpdateGlueTypeDto): Promise<import("./entities/glue-type.entity").GlueTypeEntity>;
    remove(id: number): Promise<import("./entities/glue-type.entity").GlueTypeEntity>;
}
