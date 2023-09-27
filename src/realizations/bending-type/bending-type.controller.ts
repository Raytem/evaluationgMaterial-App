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
import { BendingTypeService } from './bending-type.service';
import { CreateBendingTypeDto } from './dto/create-bending-type.dto';
import { UpdateBendingTypeDto } from './dto/update-bending-type.dto';
import { Admin } from 'src/decorators/admin.decorator';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';

@Controller('bending-type')
export class BendingTypeController {
  constructor(private readonly bendingTypeService: BendingTypeService) {}

  @Admin()
  @Post()
  async create(@Body() createAbrasionTypeDto: CreateBendingTypeDto) {
    return this.bendingTypeService.create(createAbrasionTypeDto);
  }

  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.bendingTypeService.findAll(paginationDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.bendingTypeService.findOne(id);
  }

  @Admin()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAbrasionTypeDto: UpdateBendingTypeDto,
  ) {
    return await this.bendingTypeService.update(id, updateAbrasionTypeDto);
  }

  @Admin()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.bendingTypeService.remove(id);
  }
}
