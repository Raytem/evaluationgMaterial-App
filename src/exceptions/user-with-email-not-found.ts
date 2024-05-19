import { HttpStatus, NotFoundException } from '@nestjs/common';
import { formatString } from 'src/utils/format-string';

export class UserWithEmailNotFound extends NotFoundException {
  static messageTemplate: string = 'user with email {email} was not found';
  static statusCode: HttpStatus = HttpStatus.NOT_FOUND;

  constructor(email: string) {
    super('Not found', { description: formatString(UserWithEmailNotFound.messageTemplate, { email }) });
  }
}
