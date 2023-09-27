import { Module } from '@nestjs/common';
import { BendingTypeService } from './bending-type.service';
import { BendingTypeController } from './bending-type.controller';
import { PaginationModule } from 'src/pagination/pagination.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BendingTypeEntity } from './entities/bending-type.entity';
import { PaginationService } from 'src/pagination/pagination.service';

@Module({
  imports: [PaginationModule, TypeOrmModule.forFeature([BendingTypeEntity])],
  controllers: [BendingTypeController],
  providers: [BendingTypeService, PaginationService],
})
export class BendingTypeModule {}
