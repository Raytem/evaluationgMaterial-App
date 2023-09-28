import { PartialType } from '@nestjs/swagger';
import { CreateGlueTypeDto } from './create-glue-type.dto';

export class UpdateGlueTypeDto extends PartialType(CreateGlueTypeDto) {}
