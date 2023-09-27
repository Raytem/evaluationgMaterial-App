import { PartialType } from '@nestjs/mapped-types';
import { CreateGlueTypeDto } from './create-glue-type.dto';

export class UpdateGlueTypeDto extends PartialType(CreateGlueTypeDto) {}
