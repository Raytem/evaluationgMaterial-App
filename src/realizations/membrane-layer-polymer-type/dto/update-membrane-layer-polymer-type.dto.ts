import { PartialType } from '@nestjs/mapped-types';
import { CreateMembraneLayerPolymerTypeDto } from './create-membrane-layer-polymer-type.dto';

export class UpdateMembraneLayerPolymerTypeDto extends PartialType(CreateMembraneLayerPolymerTypeDto) {}
