import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { ConditionEntity } from 'src/realizations/condition/entities/condition.entity';
import { EstimationEntity } from 'src/realizations/estimation/entities/estimation.entity';
import { GlueTypeEntity } from 'src/realizations/glue-type/entities/glue-type.entity';
import { HomeostasisFunctionEntity } from 'src/realizations/homeostasis-function/entities/homeostasis-function.entity';
import { ImageEntity } from 'src/realizations/image/entities/image.entity';
import { LayerEntity } from 'src/realizations/layer/entities/layer.entity';
import { MembraneLayerPolymerTypeEntity } from 'src/realizations/membrane-layer-polymer-type/entities/membrane-layer-polymer-type.entity';
import { ProductionMethodEntity } from 'src/realizations/production-method/entities/production-method.entity';
import { ReliabilityFunctionEntity } from 'src/realizations/reliability-function/entities/reliability-function.entity';
import { UserEntity } from 'src/realizations/user/entities/user.entity';
import { WaterproofFunctionEntity } from 'src/realizations/waterproof-function/entities/waterproof-function.entity';
export declare class MaterialEntity extends AbstractBaseEntity {
    name: string;
    manufacturer: string;
    description: string;
    depth: number;
    condition: ConditionEntity;
    waterproofFunction: WaterproofFunctionEntity;
    homeostasisFunction: HomeostasisFunctionEntity;
    reliabilityFunction: ReliabilityFunctionEntity;
    estimation: EstimationEntity;
    layers: LayerEntity[];
    images: ImageEntity[];
    user: UserEntity;
    productionMethod: ProductionMethodEntity;
    membraneLayerPolymerType: MembraneLayerPolymerTypeEntity;
    glueType: GlueTypeEntity;
}
