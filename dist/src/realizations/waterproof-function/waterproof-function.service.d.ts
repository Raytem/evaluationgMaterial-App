import { WaterproofFunctionEntity } from './entities/waterproof-function.entity';
import { EntityManager, Repository } from 'typeorm';
import { CreateWaterproofFunctionDto } from './dto/create-waterproof-function.dto';
export declare class WaterproofFunctionService {
    private waterProofFunctionRepository;
    constructor(waterProofFunctionRepository: Repository<WaterproofFunctionEntity>);
    create(createWaterproofFunctionDto: CreateWaterproofFunctionDto, manager?: EntityManager): Promise<WaterproofFunctionEntity>;
}
