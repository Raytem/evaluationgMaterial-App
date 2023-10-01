import { Module } from '@nestjs/common';
import { CalculationService } from './calculation.service';
import { CommentModule } from '../comment/comment.module';

@Module({
  imports: [CommentModule],
  providers: [CalculationService],
  exports: [CalculationService],
})
export class CalculationModule {}
