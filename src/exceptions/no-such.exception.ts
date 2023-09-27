import { HttpException, HttpStatus } from '@nestjs/common';

export class NoSuchException extends HttpException {
  constructor(entityName: string) {
    super(`No such ${entityName}`, HttpStatus.NOT_FOUND);
  }
}
