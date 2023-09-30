import { Module } from '@nestjs/common';
import { HomeostasisFunctionService } from './homeostasis-function.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeostasisFunctionEntity } from './entities/homeostasis-function.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HomeostasisFunctionEntity])],
  providers: [HomeostasisFunctionService],
  exports: [HomeostasisFunctionService],
})
export class HomeostasisFunctionModule {}
