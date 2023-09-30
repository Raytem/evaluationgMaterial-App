import { Module } from '@nestjs/common';
import { WashingService } from './washing.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WashingEntity } from './entities/washing.entity';
import { WashingTypeModule } from '../washing-type/washing-type.module';

@Module({
  imports: [WashingTypeModule, TypeOrmModule.forFeature([WashingEntity])],
  providers: [WashingService],
  exports: [WashingService],
})
export class WashingModule {}
