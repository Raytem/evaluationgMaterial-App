import { BendingTypeService } from './bending-type.service';
import { CreateBendingTypeDto } from './dto/create-bending-type.dto';
import { UpdateBendingTypeDto } from './dto/update-bending-type.dto';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
import { BendingTypeEntity } from './entities/bending-type.entity';
export declare class BendingTypeController {
    private readonly bendingTypeService;
    constructor(bendingTypeService: BendingTypeService);
    create(createAbrasionTypeDto: CreateBendingTypeDto): Promise<BendingTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<BendingTypeEntity[]>;
    findOne(id: number): Promise<BendingTypeEntity>;
    update(id: number, updateAbrasionTypeDto: UpdateBendingTypeDto): Promise<BendingTypeEntity>;
    remove(id: number): Promise<BendingTypeEntity>;
}
