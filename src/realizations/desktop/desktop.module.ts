import { Module } from '@nestjs/common';
import { DesktopService } from './desktop.service';
import { DesktopController } from './desktop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DesktopEntity } from './entities/desktop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DesktopEntity])],
  controllers: [DesktopController],
  providers: [DesktopService],
})
export class DesktopModule {}
