import { CreateWashingTypeDto } from './dto/create-washing-type.dto';
import { UpdateWashingTypeDto } from './dto/update-washing-type.dto';
import { PaginationService } from 'src/pagination/pagination.service';
import { Repository } from 'typeorm';
import { WashingTypeEntity } from './entities/washing-type.entity';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
export declare class WashingTypeService {
    private paginationService;
    private washingTypeRepository;
    constructor(paginationService: PaginationService, washingTypeRepository: Repository<WashingTypeEntity>);
    create(createWashingTypeDto: CreateWashingTypeDto): Promise<WashingTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<WashingTypeEntity[]>;
    findOne(id: number, name?: string): Promise<WashingTypeEntity>;
    update(id: number, updateWashingTypeDto: UpdateWashingTypeDto): Promise<WashingTypeEntity>;
    remove(id: number): Promise<WashingTypeEntity>;
}
