import { ImageEntity } from '../entities/image.entity';
declare const CreateImageDto_base: import("@nestjs/common").Type<Omit<ImageEntity, "id" | "webContentLink">>;
export declare class CreateImageDto extends CreateImageDto_base {
}
export {};
