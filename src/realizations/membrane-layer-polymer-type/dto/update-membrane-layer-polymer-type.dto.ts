import { PartialType } from '@nestjs/swagger';
import { CreateMembraneLayerPolymerTypeDto } from './create-membrane-layer-polymer-type.dto';

export class UpdateMembraneLayerPolymerTypeDto extends PartialType(
  CreateMembraneLayerPolymerTypeDto,
) {}
