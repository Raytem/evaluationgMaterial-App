import { Module } from '@nestjs/common';
import { ProductionMethodService } from './production-method.service';
import { ProductionMethodController } from './production-method.controller';
import { PaginationService } from 'src/pagination/pagination.service';
import { PaginationModule } from 'src/pagination/pagination.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductionMethodEntity } from './entities/production-method.entity';

@Module({
  imports: [
    PaginationModule,
    TypeOrmModule.forFeature([ProductionMethodEntity]),
  ],
  controllers: [ProductionMethodController],
  providers: [ProductionMethodService, PaginationService],
})
export class ProductionMethodModule {}
