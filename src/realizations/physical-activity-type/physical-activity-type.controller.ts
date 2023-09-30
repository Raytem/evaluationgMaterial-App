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
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import {
  ApiBasicAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PhysicalActivityTypeEntity } from './entities/physical-activity-type.entity';

@ApiBasicAuth()
@ApiTags('physical-activity-type')
@Controller('physical-activity-type')
export class PhysicalActivityTypeController {
  constructor(
    private readonly physicalActivityTypeService: PhysicalActivityTypeService,
  ) {}

  @ApiResponse({ type: PhysicalActivityTypeEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Post()
  async create(@Body() createAbrasionTypeDto: CreatePhysicalActivityTypeDto) {
    return this.physicalActivityTypeService.create(createAbrasionTypeDto);
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
  @ApiResponse({ type: PhysicalActivityTypeEntity, isArray: true })
  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.physicalActivityTypeService.findAll(paginationDto);
  }

  @ApiResponse({ type: PhysicalActivityTypeEntity })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.physicalActivityTypeService.findOne(id);
  }

  @ApiResponse({ type: PhysicalActivityTypeEntity })
  @ApiOperation({ summary: 'ADMIN' })
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

  @ApiResponse({ type: PhysicalActivityTypeEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.physicalActivityTypeService.remove(id);
  }
}
