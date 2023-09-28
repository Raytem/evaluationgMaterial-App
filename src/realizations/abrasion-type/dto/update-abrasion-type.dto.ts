import { PartialType } from '@nestjs/swagger';
import { CreateAbrasionTypeDto } from './create-abrasion-type.dto';

export class UpdateAbrasionTypeDto extends PartialType(CreateAbrasionTypeDto) {}
