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
import { ProductionMethodService } from './production-method.service';
import { CreateProductionMethodDto } from './dto/create-production-method.dto';
import { UpdateProductionMethodDto } from './dto/update-production-method.dto';
import { Admin } from 'src/decorators/admin.decorator';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import {
  ApiBasicAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ProductionMethodEntity } from './entities/production-method.entity';

@ApiBasicAuth()
@ApiTags('production-method')
@Controller('production-method')
export class ProductionMethodController {
  constructor(
    private readonly productionMethodService: ProductionMethodService,
  ) {}
  @ApiResponse({ type: ProductionMethodEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Post()
  async create(@Body() createAbrasionTypeDto: CreateProductionMethodDto) {
    return this.productionMethodService.create(createAbrasionTypeDto);
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
  @ApiResponse({ type: ProductionMethodEntity, isArray: true })
  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.productionMethodService.findAll(paginationDto);
  }

  @ApiResponse({ type: ProductionMethodEntity })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.productionMethodService.findOne(id);
  }

  @ApiResponse({ type: ProductionMethodEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAbrasionTypeDto: UpdateProductionMethodDto,
  ) {
    return await this.productionMethodService.update(id, updateAbrasionTypeDto);
  }

  @ApiResponse({ type: ProductionMethodEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.productionMethodService.remove(id);
  }
}
