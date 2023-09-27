import { BendingTypeService } from './bending-type.service';
import { CreateBendingTypeDto } from './dto/create-bending-type.dto';
import { UpdateBendingTypeDto } from './dto/update-bending-type.dto';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
export declare class BendingTypeController {
    private readonly bendingTypeService;
    constructor(bendingTypeService: BendingTypeService);
    create(createAbrasionTypeDto: CreateBendingTypeDto): Promise<import("./entities/bending-type.entity").BendingTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<import("./entities/bending-type.entity").BendingTypeEntity[]>;
    findOne(id: number): Promise<import("./entities/bending-type.entity").BendingTypeEntity>;
    update(id: number, updateAbrasionTypeDto: UpdateBendingTypeDto): Promise<import("./entities/bending-type.entity").BendingTypeEntity>;
    remove(id: number): Promise<import("./entities/bending-type.entity").BendingTypeEntity>;
}
