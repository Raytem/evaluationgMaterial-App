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
import { WashingTypeService } from './washing-type.service';
import { CreateWashingTypeDto } from './dto/create-washing-type.dto';
import { UpdateWashingTypeDto } from './dto/update-washing-type.dto';
import { Admin } from 'src/decorators/admin.decorator';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import {
  ApiBasicAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { WashingTypeEntity } from './entities/washing-type.entity';

@ApiBasicAuth()
@ApiTags('washing-type')
@Controller('washing-type')
export class WashingTypeController {
  constructor(private readonly washingTypeService: WashingTypeService) {}

  @ApiResponse({ type: WashingTypeEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Post()
  async create(@Body() createAbrasionTypeDto: CreateWashingTypeDto) {
    return this.washingTypeService.create(createAbrasionTypeDto);
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
  @ApiResponse({ type: WashingTypeEntity, isArray: true })
  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.washingTypeService.findAll(paginationDto);
  }

  @ApiResponse({ type: WashingTypeEntity })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.washingTypeService.findOne(id);
  }

  @ApiResponse({ type: WashingTypeEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAbrasionTypeDto: UpdateWashingTypeDto,
  ) {
    return await this.washingTypeService.update(id, updateAbrasionTypeDto);
  }

  @ApiResponse({ type: WashingTypeEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.washingTypeService.remove(id);
  }
}
