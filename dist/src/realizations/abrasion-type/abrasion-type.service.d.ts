import { CreateAbrasionTypeDto } from './dto/create-abrasion-type.dto';
import { UpdateAbrasionTypeDto } from './dto/update-abrasion-type.dto';
import { AbrasionTypeEntity } from './entities/abrasion-type.entity';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import { PaginationService } from 'src/services/pagination/pagination.service';
import { Repository } from 'typeorm';
export declare class AbrasionTypeService {
    private paginationService;
    private abrasionTypeRepository;
    constructor(paginationService: PaginationService, abrasionTypeRepository: Repository<AbrasionTypeEntity>);
    create(createAbrasionTypeDto: CreateAbrasionTypeDto): Promise<AbrasionTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<AbrasionTypeEntity[]>;
    findOne(id: number, name?: string): Promise<AbrasionTypeEntity>;
    update(id: number, updateAbrasionTypeDto: UpdateAbrasionTypeDto): Promise<AbrasionTypeEntity>;
    remove(id: number): Promise<AbrasionTypeEntity>;
}
