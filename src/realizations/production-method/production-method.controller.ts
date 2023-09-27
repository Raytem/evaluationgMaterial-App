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
import { PaginationDto } from 'src/pagination/dto/pagination.dto';

@Controller('production-method')
export class ProductionMethodController {
  constructor(
    private readonly productionMethodService: ProductionMethodService,
  ) {}
  @Admin()
  @Post()
  async create(@Body() createAbrasionTypeDto: CreateProductionMethodDto) {
    return this.productionMethodService.create(createAbrasionTypeDto);
  }

  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.productionMethodService.findAll(paginationDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.productionMethodService.findOne(id);
  }

  @Admin()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAbrasionTypeDto: UpdateProductionMethodDto,
  ) {
    return await this.productionMethodService.update(id, updateAbrasionTypeDto);
  }

  @Admin()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.productionMethodService.remove(id);
  }
}
