import { PartialType } from '@nestjs/swagger';
import { CreateWashingTypeDto } from './create-washing-type.dto';

export class UpdateWashingTypeDto extends PartialType(CreateWashingTypeDto) {}
