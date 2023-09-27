import { Module } from '@nestjs/common';
import { WashingService } from './washing.service';

@Module({
  providers: [WashingService],
})
export class WashingModule {}
