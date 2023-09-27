import { Module } from '@nestjs/common';
import { AbrasionTypeService } from './abrasion-type.service';
import { AbrasionTypeController } from './abrasion-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbrasionTypeEntity } from './entities/abrasion-type.entity';
import { PaginationModule } from 'src/pagination/pagination.module';
import { PaginationService } from 'src/pagination/pagination.service';

@Module({
  imports: [PaginationModule, TypeOrmModule.forFeature([AbrasionTypeEntity])],
  controllers: [AbrasionTypeController],
  providers: [AbrasionTypeService, PaginationService],
})
export class AbrasionTypeModule {}
