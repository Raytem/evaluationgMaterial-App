import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
export declare class ImageEntity extends AbstractBaseEntity {
    name: string;
    folderName: string;
    get webContentLink(): string;
    material: MaterialEntity;
    constructor(partial?: Partial<ImageEntity>);
}
