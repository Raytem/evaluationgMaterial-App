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

@Controller('layer-type')
export class LayerTypeController {
  constructor(private readonly layerTypeService: LayerTypeService) {}

  @Admin()
  @Post()
  async create(@Body() createAbrasionTypeDto: CreateLayerTypeDto) {
    return this.layerTypeService.create(createAbrasionTypeDto);
  }

  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.layerTypeService.findAll(paginationDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.layerTypeService.findOne(id);
  }

  @Admin()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAbrasionTypeDto: UpdateLayerTypeDto,
  ) {
    return await this.layerTypeService.update(id, updateAbrasionTypeDto);
  }

  @Admin()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.layerTypeService.remove(id);
  }
}
