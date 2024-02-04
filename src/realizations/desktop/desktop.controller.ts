import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  StreamableFile,
  Res,
} from '@nestjs/common';
import { DesktopService } from './desktop.service';
import { CreateDesktopDto } from './dto/create-desktop.dto';
import { UpdateDesktopDto } from './dto/update-desktop.dto';
import {
  ApiBasicAuth,
  ApiOperation,
  ApiProduces,
  ApiTags,
} from '@nestjs/swagger';
import { Public } from 'src/decorators/public.decorator';
import { Response } from 'express';

@ApiTags('desktop')
@Controller('desktop')
export class DesktopController {
  constructor(private readonly desktopService: DesktopService) {}

  @ApiBasicAuth()
  @ApiOperation({ summary: 'DEVELOPER' })
  @Post()
  async create(@Body() createDesktopDto: CreateDesktopDto) {
    return this.desktopService.create(createDesktopDto);
  }

  @Public()
  @Get('latestVersion')
  async getLatestVersion() {
    return this.desktopService.getLatestVersion();
  }

  @Public()
  @ApiOperation({ summary: 'returns desktop-app installer' })
  @ApiProduces('application/octet-stream')
  @Get()
  async getInstaller(@Res({ passthrough: true }) res: Response) {
    const reportBuffer = await this.desktopService.getInstaller();

    const fileName = `file.txt`;

    res.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename=${fileName}`,
    });

    return new StreamableFile(reportBuffer);
  }
}
