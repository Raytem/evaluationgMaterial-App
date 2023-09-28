import { PartialType } from '@nestjs/swagger';
import { CreateLayerTypeDto } from './create-layer-type.dto';

export class UpdateLayerTypeDto extends PartialType(CreateLayerTypeDto) {}
