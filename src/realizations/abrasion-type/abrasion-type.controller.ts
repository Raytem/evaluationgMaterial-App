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
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import {
  ApiBasicAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AbrasionTypeEntity } from './entities/abrasion-type.entity';

@ApiBasicAuth()
@ApiTags('abrasion-type')
@Controller('abrasion-type')
export class AbrasionTypeController {
  constructor(private readonly abrasionTypeService: AbrasionTypeService) {}

  @ApiResponse({ type: AbrasionTypeEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Post()
  async create(@Body() createAbrasionTypeDto: CreateAbrasionTypeDto) {
    return this.abrasionTypeService.create(createAbrasionTypeDto);
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
  @ApiResponse({ type: AbrasionTypeEntity, isArray: true })
  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.abrasionTypeService.findAll(paginationDto);
  }

  @ApiResponse({ type: AbrasionTypeEntity })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.abrasionTypeService.findOne(id);
  }

  @ApiResponse({ type: AbrasionTypeEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAbrasionTypeDto: UpdateAbrasionTypeDto,
  ) {
    return await this.abrasionTypeService.update(id, updateAbrasionTypeDto);
  }

  @ApiResponse({ type: AbrasionTypeEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.abrasionTypeService.remove(id);
  }
}
