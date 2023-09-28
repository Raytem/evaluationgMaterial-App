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
import { LayerTypeService } from './layer-type.service';
import { CreateLayerTypeDto } from './dto/create-layer-type.dto';
import { UpdateLayerTypeDto } from './dto/update-layer-type.dto';
import { Admin } from 'src/decorators/admin.decorator';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
import {
  ApiBasicAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LayerEntity } from '../layer/entities/layer.entity';

@ApiBasicAuth()
@ApiTags('layer-type')
@Controller('layer-type')
export class LayerTypeController {
  constructor(private readonly layerTypeService: LayerTypeService) {}

  @ApiResponse({ type: LayerEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Post()
  async create(@Body() createAbrasionTypeDto: CreateLayerTypeDto) {
    return this.layerTypeService.create(createAbrasionTypeDto);
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
  @ApiResponse({ type: LayerEntity, isArray: true })
  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.layerTypeService.findAll(paginationDto);
  }

  @ApiResponse({ type: LayerEntity })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.layerTypeService.findOne(id);
  }

  @ApiResponse({ type: LayerEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAbrasionTypeDto: UpdateLayerTypeDto,
  ) {
    return await this.layerTypeService.update(id, updateAbrasionTypeDto);
  }

  @ApiResponse({ type: LayerEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.layerTypeService.remove(id);
  }
}
