import { WashingEntity } from '../entities/washing.entity';
declare const CreateWashingDto_base: import("@nestjs/common").Type<Pick<WashingEntity, "cyclesCnt" | "duration" | "press" | "temperature">>;
export declare class CreateWashingDto extends CreateWashingDto_base {
    washingType_id: number;
}
export {};
