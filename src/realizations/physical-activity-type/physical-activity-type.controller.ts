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
import { PhysicalActivityTypeService } from './physical-activity-type.service';
import { CreatePhysicalActivityTypeDto } from './dto/create-physical-activity-type.dto';
import { UpdatePhysicalActivityTypeDto } from './dto/update-physical-activity-type.dto';
import { Admin } from 'src/decorators/admin.decorator';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';

@Controller('physical-activity-type')
export class PhysicalActivityTypeController {
  constructor(
    private readonly physicalActivityTypeService: PhysicalActivityTypeService,
  ) {}

  @Admin()
  @Post()
  async create(@Body() createAbrasionTypeDto: CreatePhysicalActivityTypeDto) {
    return this.physicalActivityTypeService.create(createAbrasionTypeDto);
  }

  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.physicalActivityTypeService.findAll(paginationDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.physicalActivityTypeService.findOne(id);
  }

  @Admin()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAbrasionTypeDto: UpdatePhysicalActivityTypeDto,
  ) {
    return await this.physicalActivityTypeService.update(
      id,
      updateAbrasionTypeDto,
    );
  }

  @Admin()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.physicalActivityTypeService.remove(id);
  }
}
