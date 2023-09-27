import { PartialType } from '@nestjs/mapped-types';
import { CreatePhysicalActivityTypeDto } from './create-physical-activity-type.dto';

export class UpdatePhysicalActivityTypeDto extends PartialType(CreatePhysicalActivityTypeDto) {}
