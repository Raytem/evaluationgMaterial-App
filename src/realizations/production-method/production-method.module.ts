import { Module } from '@nestjs/common';
import { ProductionMethodService } from './production-method.service';
import { ProductionMethodController } from './production-method.controller';
import { PaginationService } from 'src/services/pagination/pagination.service';
import { PaginationModule } from 'src/services/pagination/pagination.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductionMethodEntity } from './entities/production-method.entity';

@Module({
  imports: [
    PaginationModule,
    TypeOrmModule.forFeature([ProductionMethodEntity]),
  ],
  controllers: [ProductionMethodController],
  providers: [ProductionMethodService, PaginationService],
  exports: [ProductionMethodService],
})
export class ProductionMethodModule {}
