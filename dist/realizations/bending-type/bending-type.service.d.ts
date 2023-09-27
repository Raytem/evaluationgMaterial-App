import { CreateBendingTypeDto } from './dto/create-bending-type.dto';
import { UpdateBendingTypeDto } from './dto/update-bending-type.dto';
import { Repository } from 'typeorm';
import { BendingTypeEntity } from './entities/bending-type.entity';
import { PaginationService } from 'src/pagination/pagination.service';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
export declare class BendingTypeService {
    private paginationService;
    private bendingTypeRepository;
    constructor(paginationService: PaginationService, bendingTypeRepository: Repository<BendingTypeEntity>);
    create(createBendingTypeDto: CreateBendingTypeDto): Promise<BendingTypeEntity>;
    findAll(paginationDto: PaginationDto): Promise<BendingTypeEntity[]>;
    findOne(id: number, name?: string): Promise<BendingTypeEntity>;
    update(id: number, updateBendingTypeDto: UpdateBendingTypeDto): Promise<BendingTypeEntity>;
    remove(id: number): Promise<BendingTypeEntity>;
}
