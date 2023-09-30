import { AbrasionTypeService } from './abrasion-type.service';
import { CreateAbrasionTypeDto } from './dto/create-abrasion-type.dto';
import { UpdateAbrasionTypeDto } from './dto/update-abrasion-type.dto';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import { AbrasionTypeEntity } from './entities/abrasion-type.entity';
export declare class AbrasionTypeController {
    private readonly abrasionTypeService;
    constructor(abrasionTypeService: AbrasionTypeService);
    create(createAbrasionTypeDto: CreateAbrasionTypeDto): Promise<AbrasionTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<AbrasionTypeEntity[]>;
    findOne(id: number): Promise<AbrasionTypeEntity>;
    update(id: number, updateAbrasionTypeDto: UpdateAbrasionTypeDto): Promise<AbrasionTypeEntity>;
    remove(id: number): Promise<AbrasionTypeEntity>;
}
