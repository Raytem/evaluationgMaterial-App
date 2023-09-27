import { HttpException } from '@nestjs/common';
export declare class NoSuchEntity extends HttpException {
    constructor(entityName: string);
}
