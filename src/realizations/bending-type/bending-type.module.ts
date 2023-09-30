import { Module } from '@nestjs/common';
import { BendingTypeService } from './bending-type.service';
import { BendingTypeController } from './bending-type.controller';
import { PaginationModule } from 'src/services/pagination/pagination.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BendingTypeEntity } from './entities/bending-type.entity';
import { PaginationService } from 'src/services/pagination/pagination.service';

@Module({
  imports: [PaginationModule, TypeOrmModule.forFeature([BendingTypeEntity])],
  controllers: [BendingTypeController],
  providers: [BendingTypeService, PaginationService],
  exports: [BendingTypeService],
})
export class BendingTypeModule {}
