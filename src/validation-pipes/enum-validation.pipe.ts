import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isDefined, isEnum } from 'class-validator';

@Injectable()
export class EnumValidationPipe implements PipeTransform<string, Promise<any>> {
  constructor(private enumEntity: any) {}

  transform(value: string, metadata: ArgumentMetadata): Promise<any> {
    if (isDefined(value) && isEnum(value, this.enumEntity)) {
      return Promise.resolve(value);
    } else {
      const errorMessage = `the value ${value} from field ${
        metadata.data
      } is not valid. Acceptable values: ${Object.values(this.enumEntity)}`;
      throw new BadRequestException(errorMessage);
    }
  }
}
