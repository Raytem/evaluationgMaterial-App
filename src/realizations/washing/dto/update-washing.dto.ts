import { PartialType } from '@nestjs/swagger';
import { CreateWashingDto } from './create-washing.dto';

export class UpdateWashingDto extends PartialType(CreateWashingDto) {}
