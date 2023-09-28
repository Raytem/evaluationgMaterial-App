import { HttpException, HttpStatus } from '@nestjs/common';

export class EntitiesReferException extends HttpException {
  constructor(entityName: string) {
    super(`Some entities refer to this ${entityName}`, HttpStatus.BAD_REQUEST);
  }
}
