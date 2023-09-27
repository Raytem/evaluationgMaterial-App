import { AbrasionTypeService } from './abrasion-type.service';
import { CreateAbrasionTypeDto } from './dto/create-abrasion-type.dto';
import { UpdateAbrasionTypeDto } from './dto/update-abrasion-type.dto';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
export declare class AbrasionTypeController {
    private readonly abrasionTypeService;
    constructor(abrasionTypeService: AbrasionTypeService);
    create(createAbrasionTypeDto: CreateAbrasionTypeDto): Promise<import("./entities/abrasion-type.entity").AbrasionTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<import("./entities/abrasion-type.entity").AbrasionTypeEntity[]>;
    findOne(id: number): Promise<import("./entities/abrasion-type.entity").AbrasionTypeEntity>;
    update(id: number, updateAbrasionTypeDto: UpdateAbrasionTypeDto): Promise<import("./entities/abrasion-type.entity").AbrasionTypeEntity>;
    remove(id: number): Promise<import("./entities/abrasion-type.entity").AbrasionTypeEntity>;
}
