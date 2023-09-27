import { PartialType } from '@nestjs/mapped-types';
import { CreateWashingTypeDto } from './create-washing-type.dto';

export class UpdateWashingTypeDto extends PartialType(CreateWashingTypeDto) {}
