import { HttpStatus, NotFoundException } from '@nestjs/common';
import { formatString } from 'src/utils/format-string';

export class NoSuchException extends NotFoundException {
  static messageTemplate: string = 'No such {entityName}';
  static statusCode: HttpStatus = HttpStatus.NOT_FOUND;

  constructor(entityName: string) {
    super('Not found', { description: formatString(NoSuchException.messageTemplate, { entityName }) });
  }
}
