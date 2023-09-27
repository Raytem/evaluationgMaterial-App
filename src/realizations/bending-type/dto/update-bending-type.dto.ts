import { PartialType } from '@nestjs/mapped-types';
import { CreateBendingTypeDto } from './create-bending-type.dto';

export class UpdateBendingTypeDto extends PartialType(CreateBendingTypeDto) {}
