import { Module } from '@nestjs/common';
import { WashingTypeService } from './washing-type.service';
import { WashingTypeController } from './washing-type.controller';
import { PaginationModule } from 'src/pagination/pagination.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WashingTypeEntity } from './entities/washing-type.entity';
import { PaginationService } from 'src/pagination/pagination.service';

@Module({
  imports: [PaginationModule, TypeOrmModule.forFeature([WashingTypeEntity])],
  controllers: [WashingTypeController],
  providers: [WashingTypeService, PaginationService],
})
export class WashingTypeModule {}
