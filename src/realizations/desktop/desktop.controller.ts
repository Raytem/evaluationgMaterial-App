import { Controller, Get, Post, Param, StreamableFile, Res, UseInterceptors, UploadedFile } from '@nestjs/common';
import { DesktopService } from './desktop.service';
import { CreateDesktopDto } from './dto/create-desktop.dto';
import {
  ApiBasicAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiProduces,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Public } from 'src/decorators/public.decorator';
import { Response } from 'express';
import { DesktopEntity } from './entities/desktop.entity';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { Developer } from 'src/decorators/developer.decorator';
import { DesktopPlatform } from 'src/enums/desktop-platform.enum';
import { EnumValidationPipe } from 'src/validation-pipes/enum-validation.pipe';
import { Multer } from 'multer';

@ApiTags('desktop')
@Controller('desktop')
export class DesktopController {
  constructor(private readonly desktopService: DesktopService) {}

  @ApiOperation({ summary: 'DEVELOPER' })
  @ApiConsumes('multipart/form-data')
  @ApiParam({ name: 'platform', enum: DesktopPlatform, type: String })
  @ApiBody({ type: CreateDesktopDto })
  @ApiResponse({ type: DesktopEntity })
  @Developer()
  @ApiBasicAuth()
  @UseInterceptors(FileInterceptor('setup'))
  @Post(':platform/:version')
  async create(
    @Param('platform', new EnumValidationPipe(DesktopPlatform))
    platform: DesktopPlatform,
    @Param('version') version: string,
    @UploadedFile() setupFile: Multer.file,
  ) {
    return this.desktopService.create(platform, version, setupFile);
  }

  @ApiResponse({ type: DesktopEntity })
  @Public()
  @Get('latestVersion')
  async getLatestVersion() {
    return await this.desktopService.getLatestVersion();
  }

  @ApiOperation({ summary: 'returns desktop setup' })
  @ApiParam({ name: 'platform', enum: DesktopPlatform, type: String })
  @ApiProduces('application/octet-stream')
  @Public()
  @Get(':platform')
  async getInstaller(
    @Param('platform', new EnumValidationPipe(DesktopPlatform))
    platform: DesktopPlatform,
    @Res({ passthrough: true }) res: Response,
  ) {
    const fileNameAndBuffer = await this.desktopService.getInstaller(platform);

    res.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename=${fileNameAndBuffer.fileName}`,
    });

    return new StreamableFile(fileNameAndBuffer.buffer);
  }
}
