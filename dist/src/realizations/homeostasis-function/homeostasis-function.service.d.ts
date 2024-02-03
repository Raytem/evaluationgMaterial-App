import { CreateHomeostasisFunctionDto } from './dto/create-homeostasis-function.dto';
import { HomeostasisFunctionEntity } from './entities/homeostasis-function.entity';
import { EntityManager, Repository } from 'typeorm';
export declare class HomeostasisFunctionService {
    private homeostasisFunctionRepository;
    constructor(homeostasisFunctionRepository: Repository<HomeostasisFunctionEntity>);
    create(createHomeostasisFunctionDto: CreateHomeostasisFunctionDto, manager?: EntityManager): Promise<HomeostasisFunctionEntity>;
}
