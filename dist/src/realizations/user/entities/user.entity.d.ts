import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
export declare class UserEntity extends AbstractBaseEntity {
    fio: string;
    email: string;
    password: string;
    isAdmin: boolean;
    materials: MaterialEntity[];
    constructor(partial: Partial<UserEntity>);
}
