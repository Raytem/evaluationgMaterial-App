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
import { MembraneLayerPolymerTypeService } from './membrane-layer-polymer-type.service';
import { CreateMembraneLayerPolymerTypeDto } from './dto/create-membrane-layer-polymer-type.dto';
import { UpdateMembraneLayerPolymerTypeDto } from './dto/update-membrane-layer-polymer-type.dto';
import { Admin } from 'src/decorators/admin.decorator';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';

@Controller('membrane-layer-polymer-type')
export class MembraneLayerPolymerTypeController {
  constructor(
    private readonly membraneLayerPolymerTypeService: MembraneLayerPolymerTypeService,
  ) {}

  @Admin()
  @Post()
  async create(
    @Body() createAbrasionTypeDto: CreateMembraneLayerPolymerTypeDto,
  ) {
    return this.membraneLayerPolymerTypeService.create(createAbrasionTypeDto);
  }

  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.membraneLayerPolymerTypeService.findAll(paginationDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.membraneLayerPolymerTypeService.findOne(id);
  }

  @Admin()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAbrasionTypeDto: UpdateMembraneLayerPolymerTypeDto,
  ) {
    return await this.membraneLayerPolymerTypeService.update(
      id,
      updateAbrasionTypeDto,
    );
  }

  @Admin()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.membraneLayerPolymerTypeService.remove(id);
  }
}
