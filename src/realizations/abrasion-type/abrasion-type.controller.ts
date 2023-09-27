import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AbrasionTypeService } from './abrasion-type.service';
import { CreateAbrasionTypeDto } from './dto/create-abrasion-type.dto';
import { Admin } from 'src/decorators/admin.decorator';
import { UpdateAbrasionTypeDto } from './dto/update-abrasion-type.dto';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';

@Controller('abrasion-type')
export class AbrasionTypeController {
  constructor(private readonly abrasionTypeService: AbrasionTypeService) {}

  @Admin()
  @Post()
  async create(@Body() createAbrasionTypeDto: CreateAbrasionTypeDto) {
    return this.abrasionTypeService.create(createAbrasionTypeDto);
  }

  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.abrasionTypeService.findAll(paginationDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.abrasionTypeService.findOne(id);
  }

  @Admin()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAbrasionTypeDto: UpdateAbrasionTypeDto,
  ) {
    return await this.abrasionTypeService.update(id, updateAbrasionTypeDto);
  }

  @Admin()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.abrasionTypeService.remove(id);
  }
}
