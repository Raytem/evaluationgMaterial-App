import { WashingEntity } from '../entities/washing.entity';
declare const CreateWashingDto_base: import("@nestjs/common").Type<Pick<WashingEntity, "temperature" | "cyclesCnt" | "duration" | "press">>;
export declare class CreateWashingDto extends CreateWashingDto_base {
    washingType_id: number;
}
export {};
