import { EstimationEntity } from 'src/realizations/estimation/entities/estimation.entity';
import { HomeostasisFunctionEntity } from 'src/realizations/homeostasis-function/entities/homeostasis-function.entity';
import { ReliabilityFunctionEntity } from 'src/realizations/reliability-function/entities/reliability-function.entity';
import { WaterproofFunctionEntity } from 'src/realizations/waterproof-function/entities/waterproof-function.entity';
export declare class CommentService {
    getWaterproofFunctionComment(calculatedWaterproofFunction: Omit<WaterproofFunctionEntity, 'id' | 'comment'>): string;
    getHomeostasisFunctionComment(calculatedHomeostasisFunction: Omit<HomeostasisFunctionEntity, 'id' | 'comment'>): string;
    getReliabilityFunctionComment(calculatedReliabilityFunction: Omit<ReliabilityFunctionEntity, 'id' | 'comment'>): string;
    getEstimationComment(calculatedEstimation: Omit<EstimationEntity, 'id' | 'comment'>): string;
}
