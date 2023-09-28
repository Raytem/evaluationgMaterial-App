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
import {
  ApiBasicAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BendingTypeEntity } from './entities/bending-type.entity';

@ApiBasicAuth()
@ApiTags('bending-type')
@Controller('bending-type')
export class BendingTypeController {
  constructor(private readonly bendingTypeService: BendingTypeService) {}

  @ApiResponse({ type: BendingTypeEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Post()
  async create(@Body() createAbrasionTypeDto: CreateBendingTypeDto) {
    return this.bendingTypeService.create(createAbrasionTypeDto);
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
  @ApiResponse({ type: BendingTypeEntity, isArray: true })
  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.bendingTypeService.findAll(paginationDto);
  }

  @ApiResponse({ type: BendingTypeEntity })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.bendingTypeService.findOne(id);
  }

  @ApiResponse({ type: BendingTypeEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAbrasionTypeDto: UpdateBendingTypeDto,
  ) {
    return await this.bendingTypeService.update(id, updateAbrasionTypeDto);
  }

  @ApiResponse({ type: BendingTypeEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.bendingTypeService.remove(id);
  }
}
