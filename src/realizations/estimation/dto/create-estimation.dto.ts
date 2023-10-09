import { OmitType } from '@nestjs/swagger';
import { EstimationEntity } from '../entities/estimation.entity';

export class CreateEstimationDto extends OmitType(EstimationEntity, ['id']) {}
