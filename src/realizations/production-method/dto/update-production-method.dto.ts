import { PartialType } from '@nestjs/swagger';
import { CreateProductionMethodDto } from './create-production-method.dto';

export class UpdateProductionMethodDto extends PartialType(
  CreateProductionMethodDto,
) {}
