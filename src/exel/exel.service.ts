import { Injectable } from '@nestjs/common';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { UserEntity } from 'src/realizations/user/entities/user.entity';

@Injectable()
export class ExelService {
  async generateReport(materialEntity: MaterialEntity, reqUser: UserEntity) {}
}
