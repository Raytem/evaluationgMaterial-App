import { Module } from '@nestjs/common';
import { PhysicalActivityTypeService } from './physical-activity-type.service';
import { PhysicalActivityTypeController } from './physical-activity-type.controller';
import { PaginationModule } from 'src/pagination/pagination.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhysicalActivityTypeEntity } from './entities/physical-activity-type.entity';
import { PaginationService } from 'src/pagination/pagination.service';

@Module({
  imports: [
    PaginationModule,
    TypeOrmModule.forFeature([PhysicalActivityTypeEntity]),
  ],
  controllers: [PhysicalActivityTypeController],
  providers: [PhysicalActivityTypeService, PaginationService],
})
export class PhysicalActivityTypeModule {}
