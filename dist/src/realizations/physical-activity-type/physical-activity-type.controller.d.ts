import { PhysicalActivityTypeService } from './physical-activity-type.service';
import { CreatePhysicalActivityTypeDto } from './dto/create-physical-activity-type.dto';
import { UpdatePhysicalActivityTypeDto } from './dto/update-physical-activity-type.dto';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import { PhysicalActivityTypeEntity } from './entities/physical-activity-type.entity';
export declare class PhysicalActivityTypeController {
    private readonly physicalActivityTypeService;
    constructor(physicalActivityTypeService: PhysicalActivityTypeService);
    create(createAbrasionTypeDto: CreatePhysicalActivityTypeDto): Promise<PhysicalActivityTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<PhysicalActivityTypeEntity[]>;
    findOne(id: number): Promise<PhysicalActivityTypeEntity>;
    update(id: number, updateAbrasionTypeDto: UpdatePhysicalActivityTypeDto): Promise<PhysicalActivityTypeEntity>;
    remove(id: number): Promise<PhysicalActivityTypeEntity>;
}
