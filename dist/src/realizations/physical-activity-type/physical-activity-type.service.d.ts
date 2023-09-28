import { CreatePhysicalActivityTypeDto } from './dto/create-physical-activity-type.dto';
import { UpdatePhysicalActivityTypeDto } from './dto/update-physical-activity-type.dto';
import { PhysicalActivityTypeEntity } from './entities/physical-activity-type.entity';
import { Repository } from 'typeorm';
import { PaginationService } from 'src/pagination/pagination.service';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
export declare class PhysicalActivityTypeService {
    private paginationService;
    private physicalActivityTypeRepository;
    constructor(paginationService: PaginationService, physicalActivityTypeRepository: Repository<PhysicalActivityTypeEntity>);
    create(createPhysicalActivityTypeDto: CreatePhysicalActivityTypeDto): Promise<PhysicalActivityTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<PhysicalActivityTypeEntity[]>;
    findOne(id: number, name?: string): Promise<PhysicalActivityTypeEntity>;
    update(id: number, updatePhysicalActivityTypeDto: UpdatePhysicalActivityTypeDto): Promise<PhysicalActivityTypeEntity>;
    remove(id: number): Promise<PhysicalActivityTypeEntity>;
}
