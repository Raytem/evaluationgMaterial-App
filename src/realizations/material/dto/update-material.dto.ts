import { PartialType, PickType } from '@nestjs/swagger';
import { MaterialInfoDto } from './material-info.dto';

export class UpdateMaterialDto extends PartialType(
  PickType(MaterialInfoDto, ['name', 'description', 'manufacturer']),
) {}
