import { PartialType } from '@nestjs/swagger';
import { CreateBendingTypeDto } from './create-bending-type.dto';

export class UpdateBendingTypeDto extends PartialType(CreateBendingTypeDto) {}
