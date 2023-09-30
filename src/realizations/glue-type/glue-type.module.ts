import { Module } from '@nestjs/common';
import { GlueTypeService } from './glue-type.service';
import { GlueTypeController } from './glue-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlueTypeEntity } from './entities/glue-type.entity';
import { PaginationModule } from 'src/services/pagination/pagination.module';
import { PaginationService } from 'src/services/pagination/pagination.service';

@Module({
  imports: [PaginationModule, TypeOrmModule.forFeature([GlueTypeEntity])],
  controllers: [GlueTypeController],
  providers: [GlueTypeService, PaginationService],
  exports: [GlueTypeService],
})
export class GlueTypeModule {}
