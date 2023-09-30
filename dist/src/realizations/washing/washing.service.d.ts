import { CreateWashingDto } from './dto/create-washing.dto';
import { WashingTypeService } from '../washing-type/washing-type.service';
import { WashingEntity } from './entities/washing.entity';
import { Repository } from 'typeorm';
import { WashingTypeEntity } from '../washing-type/entities/washing-type.entity';
export declare class WashingService {
    private washingTypeService;
    private washingRepository;
    constructor(washingTypeService: WashingTypeService, washingRepository: Repository<WashingEntity>);
    create(createWashingDto: CreateWashingDto, washingType?: WashingTypeEntity): Promise<WashingEntity>;
}
