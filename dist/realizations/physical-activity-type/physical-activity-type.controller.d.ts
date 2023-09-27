import { PhysicalActivityTypeService } from './physical-activity-type.service';
import { CreatePhysicalActivityTypeDto } from './dto/create-physical-activity-type.dto';
import { UpdatePhysicalActivityTypeDto } from './dto/update-physical-activity-type.dto';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
export declare class PhysicalActivityTypeController {
    private readonly physicalActivityTypeService;
    constructor(physicalActivityTypeService: PhysicalActivityTypeService);
    create(createAbrasionTypeDto: CreatePhysicalActivityTypeDto): Promise<import("./entities/physical-activity-type.entity").PhysicalActivityTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<import("./entities/physical-activity-type.entity").PhysicalActivityTypeEntity[]>;
    findOne(id: number): Promise<import("./entities/physical-activity-type.entity").PhysicalActivityTypeEntity>;
    update(id: number, updateAbrasionTypeDto: UpdatePhysicalActivityTypeDto): Promise<import("./entities/physical-activity-type.entity").PhysicalActivityTypeEntity>;
    remove(id: number): Promise<import("./entities/physical-activity-type.entity").PhysicalActivityTypeEntity>;
}
