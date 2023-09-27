import { WashingTypeService } from './washing-type.service';
import { CreateWashingTypeDto } from './dto/create-washing-type.dto';
import { UpdateWashingTypeDto } from './dto/update-washing-type.dto';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
export declare class WashingTypeController {
    private readonly washingTypeService;
    constructor(washingTypeService: WashingTypeService);
    create(createAbrasionTypeDto: CreateWashingTypeDto): Promise<import("./entities/washing-type.entity").WashingTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<import("./entities/washing-type.entity").WashingTypeEntity[]>;
    findOne(id: number): Promise<import("./entities/washing-type.entity").WashingTypeEntity>;
    update(id: number, updateAbrasionTypeDto: UpdateWashingTypeDto): Promise<import("./entities/washing-type.entity").WashingTypeEntity>;
    remove(id: number): Promise<import("./entities/washing-type.entity").WashingTypeEntity>;
}
