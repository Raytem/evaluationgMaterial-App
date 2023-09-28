import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { LayerEntity } from 'src/realizations/layer/entities/layer.entity';
export declare class LayerTypeEntity extends AbstractBaseEntity {
    name: string;
    layers: LayerEntity[];
}
