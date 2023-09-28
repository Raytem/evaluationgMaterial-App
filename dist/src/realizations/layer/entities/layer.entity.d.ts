import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { LayerTypeEntity } from 'src/realizations/layer-type/entities/layer-type.entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
export declare class LayerEntity extends AbstractBaseEntity {
    indexNum: number;
    layerType: LayerTypeEntity;
    material: MaterialEntity;
}
