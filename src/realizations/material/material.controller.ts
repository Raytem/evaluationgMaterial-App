import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFiles,
  BadRequestException,
  Inject,
  Req,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { MaterialService } from './material.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import {
  ApiBasicAuth,
  ApiBody,
  ApiConsumes,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import { MaterialEntity } from './entities/material.entity';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';
import { ConfigType } from '@nestjs/config';
import { fileConfig } from 'src/config/config-functions/file.config';
import { validateImages } from 'src/utils/validate-images';
import { MultipartMaterialData } from 'src/decorators/multipart-material-data';
import { User } from 'src/decorators/reqUser.decorator';
import { UserEntity } from '../user/entities/user.entity';
import { MaterialFilterDto } from './dto/material-filter.dto';
import { Response } from 'express';
import { Public } from 'src/decorators/public.decorator';
import CyrillicToTranslit from 'cyrillic-to-translit-js';

@ApiBasicAuth()
@ApiTags('material')
@Controller('material')
export class MaterialController {
  constructor(
    private readonly materialService: MaterialService,

    @Inject(fileConfig.KEY)
    private fileCfg: ConfigType<typeof fileConfig>,
  ) {}

  @Public()
  @Get(':id/report')
  async getReportFromTemplate(
    @Param('id') material_id: number,
    @Res({ passthrough: true }) res: Response,
  ) {
    const material = await this.materialService.findOne(material_id, true);

    const reportBuffer =
      await this.materialService.getReportFromTemplate(material);

    const fileName = `Отчет по артикулу(${material.name}).xlsx`;

    const translitedFileName = CyrillicToTranslit({ preset: 'ru' }).transform(
      fileName,
      '_',
    );

    res.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename=${translitedFileName}`,
    });

    return new StreamableFile(reportBuffer);
  }

  @ApiConsumes('multipart/form-data')
  @ApiResponse({ type: MaterialEntity })
  @ApiBody({ type: CreateMaterialDto })
  @UseInterceptors(FilesInterceptor('images'))
  @Post()
  async create(
    @UploadedFiles() images: Multer.File[],
    @MultipartMaterialData() createMaterialDto: CreateMaterialDto,
    @User() reqUser: UserEntity,
  ) {
    validateImages(this.fileCfg, images);

    return await this.materialService.create(
      createMaterialDto,
      images,
      reqUser,
    );
  }

  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'perPage',
    type: Number,
    required: false,
  })
  @ApiResponse({ type: MaterialEntity, isArray: true })
  @Get()
  async findAll(@Query() materialFilterDto: MaterialFilterDto) {
    return await this.materialService.findAll(materialFilterDto);
  }

  @ApiResponse({ type: MaterialEntity })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.materialService.findOne(id);
  }

  @ApiResponse({ type: MaterialEntity })
  @Delete(':id')
  async remove(@Param('id') id: number, @User() reqUser: UserEntity) {
    return await this.materialService.remove(id, reqUser);
  }
}
