import { EstimationEntity } from 'src/realizations/estimation/entities/estimation.entity';
import { HomeostasisFunctionEntity } from 'src/realizations/homeostasis-function/entities/homeostasis-function.entity';
import { ReliabilityFunctionEntity } from 'src/realizations/reliability-function/entities/reliability-function.entity';
import { WaterproofFunctionEntity } from 'src/realizations/waterproof-function/entities/waterproof-function.entity';
export declare class FunctionalIndicators {
    waterproofFunction: Omit<WaterproofFunctionEntity, 'id'>;
    homeostasisFunction: Omit<HomeostasisFunctionEntity, 'id'>;
    reliabilityFunction: Omit<ReliabilityFunctionEntity, 'id'>;
    estimation: Omit<EstimationEntity, 'id'>;
}
