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
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { DesktopService } from './desktop.service';
import { CreateDesktopDto } from './dto/create-desktop.dto';
import {
  ApiBasicAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiProduces,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Public } from 'src/decorators/public.decorator';
import { Response } from 'express';
import { DesktopEntity } from './entities/desktop.entity';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';
import { NewDesktopVersionFilesDto } from './dto/new-desktop-version-files.dto';
import { Developer } from 'src/decorators/developer.decorator';
import { Admin } from 'src/decorators/admin.decorator';

@ApiTags('desktop')
@Controller('desktop')
export class DesktopController {
  constructor(private readonly desktopService: DesktopService) {}

  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateDesktopDto })
  @ApiOperation({ summary: 'DEVELOPER' })
  @ApiBasicAuth()
  @Developer()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'setup', maxCount: 1 },
      { name: 'update', maxCount: 1 },
    ]),
  )
  @ApiResponse({ type: DesktopEntity })
  @Post(':version')
  async create(
    @Param('version') version: string,
    @UploadedFiles()
    files: NewDesktopVersionFilesDto,
  ) {
    return this.desktopService.create(version, files);
  }

  @Public()
  @ApiResponse({ type: DesktopEntity })
  @Get('latestVersion')
  async getLatestVersion() {
    return await this.desktopService.getLatestVersion();
  }

  @Public()
  @ApiOperation({ summary: 'returns desktop update' })
  @ApiProduces('application/octet-stream')
  @Get('update')
  async getUpdate(@Res({ passthrough: true }) res: Response) {
    const fileNameAndBuffer = await this.desktopService.getUpdate();

    res.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename=${fileNameAndBuffer.fileName}`,
    });

    return new StreamableFile(fileNameAndBuffer.buffer);
  }

  @Public()
  @ApiOperation({ summary: 'returns desktop setup' })
  @ApiProduces('application/octet-stream')
  @Get()
  async getInstaller(@Res({ passthrough: true }) res: Response) {
    const fileNameAndBuffer = await this.desktopService.getInstaller();

    res.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename=${fileNameAndBuffer.fileName}`,
    });

    return new StreamableFile(fileNameAndBuffer.buffer);
  }
}
