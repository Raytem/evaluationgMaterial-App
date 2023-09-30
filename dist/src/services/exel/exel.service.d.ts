import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { UserEntity } from 'src/realizations/user/entities/user.entity';
export declare class ExelService {
    generateReport(materialEntity: MaterialEntity, reqUser: UserEntity): Promise<void>;
}
