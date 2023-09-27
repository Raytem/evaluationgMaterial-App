import { PartialType } from '@nestjs/mapped-types';
import { CreateAbrasionTypeDto } from './create-abrasion-type.dto';

export class UpdateAbrasionTypeDto extends PartialType(CreateAbrasionTypeDto) {}
