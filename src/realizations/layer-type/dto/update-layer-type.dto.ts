import { PartialType } from '@nestjs/mapped-types';
import { CreateLayerTypeDto } from './create-layer-type.dto';

export class UpdateLayerTypeDto extends PartialType(CreateLayerTypeDto) {}
