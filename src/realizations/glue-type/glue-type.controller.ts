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

@Controller('glue-type')
export class GlueTypeController {
  constructor(private readonly glueTypeService: GlueTypeService) {}

  @Admin()
  @Post()
  async create(@Body() createAbrasionTypeDto: CreateGlueTypeDto) {
    return this.glueTypeService.create(createAbrasionTypeDto);
  }

  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.glueTypeService.findAll(paginationDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.glueTypeService.findOne(id);
  }

  @Admin()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAbrasionTypeDto: UpdateGlueTypeDto,
  ) {
    return await this.glueTypeService.update(id, updateAbrasionTypeDto);
  }

  @Admin()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.glueTypeService.remove(id);
  }
}
