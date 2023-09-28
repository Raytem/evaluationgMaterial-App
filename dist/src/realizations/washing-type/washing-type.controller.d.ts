import { WashingTypeService } from './washing-type.service';
import { CreateWashingTypeDto } from './dto/create-washing-type.dto';
import { UpdateWashingTypeDto } from './dto/update-washing-type.dto';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
import { WashingTypeEntity } from './entities/washing-type.entity';
export declare class WashingTypeController {
    private readonly washingTypeService;
    constructor(washingTypeService: WashingTypeService);
    create(createAbrasionTypeDto: CreateWashingTypeDto): Promise<WashingTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<WashingTypeEntity[]>;
    findOne(id: number): Promise<WashingTypeEntity>;
    update(id: number, updateAbrasionTypeDto: UpdateWashingTypeDto): Promise<WashingTypeEntity>;
    remove(id: number): Promise<WashingTypeEntity>;
}
