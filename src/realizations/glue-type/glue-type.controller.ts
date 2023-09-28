import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { GlueTypeService } from './glue-type.service';
import { CreateGlueTypeDto } from './dto/create-glue-type.dto';
import { UpdateGlueTypeDto } from './dto/update-glue-type.dto';
import { Admin } from 'src/decorators/admin.decorator';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
import {
  ApiBasicAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GlueTypeEntity } from './entities/glue-type.entity';

@ApiBasicAuth()
@ApiTags('glue-type')
@Controller('glue-type')
export class GlueTypeController {
  constructor(private readonly glueTypeService: GlueTypeService) {}

  @ApiResponse({ type: GlueTypeEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Post()
  async create(@Body() createAbrasionTypeDto: CreateGlueTypeDto) {
    return this.glueTypeService.create(createAbrasionTypeDto);
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
  @ApiResponse({ type: GlueTypeEntity, isArray: true })
  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.glueTypeService.findAll(paginationDto);
  }

  @ApiResponse({ type: GlueTypeEntity })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.glueTypeService.findOne(id);
  }

  @ApiResponse({ type: GlueTypeEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAbrasionTypeDto: UpdateGlueTypeDto,
  ) {
    return await this.glueTypeService.update(id, updateAbrasionTypeDto);
  }

  @ApiResponse({ type: GlueTypeEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.glueTypeService.remove(id);
  }
}
