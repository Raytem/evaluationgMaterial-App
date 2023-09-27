import { HttpException } from '@nestjs/common';
export declare class NoSuchException extends HttpException {
    constructor(entityName: string);
}
