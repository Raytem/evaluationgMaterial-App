import { PartialType } from '@nestjs/swagger';
import { CreatePhysicalActivityTypeDto } from './create-physical-activity-type.dto';

export class UpdatePhysicalActivityTypeDto extends PartialType(CreatePhysicalActivityTypeDto) {}
