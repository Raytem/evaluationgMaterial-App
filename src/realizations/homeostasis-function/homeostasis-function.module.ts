import { Module } from '@nestjs/common';
import { HomeostasisFunctionService } from './homeostasis-function.service';

@Module({
  providers: [HomeostasisFunctionService],
})
export class HomeostasisFunctionModule {}
