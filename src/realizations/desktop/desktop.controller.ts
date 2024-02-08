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
  ParseFilePipeBuilder,
  HttpStatus,
} from '@nestjs/common';
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
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { NewDesktopVersionFilesDto } from './dto/new-desktop-version-files.dto';
import { Developer } from 'src/decorators/developer.decorator';
import { DesktopPlatform } from 'src/enums/desktop-platform.enum';
import { EnumValidationPipe } from 'src/validation-pipes/enum-validation.pipe';

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
      { name: 'macSetup', maxCount: 1 },
      { name: 'winSetup', maxCount: 1 },
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

  // @Public()
  // @ApiOperation({ summary: 'returns desktop update' })
  // @ApiProduces('application/octet-stream')
  // @Get('update')
  // async getUpdate(@Res({ passthrough: true }) res: Response) {
  //   const fileNameAndBuffer = await this.desktopService.getUpdate();

  //   res.set({
  //     'Content-Type': 'application/octet-stream',
  //     'Content-Disposition': `attachment; filename=${fileNameAndBuffer.fileName}`,
  //   });

  //   return new StreamableFile(fileNameAndBuffer.buffer);
  // }

  @Public()
  @ApiOperation({ summary: 'returns desktop setup' })
  @ApiProduces('application/octet-stream')
  @ApiParam({ name: 'platform', enum: DesktopPlatform, type: String })
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
