import { HttpException } from '@nestjs/common';
export declare class EntitiesReferException extends HttpException {
    constructor(entityName: string);
}
