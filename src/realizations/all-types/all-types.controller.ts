import { Controller, Get } from '@nestjs/common';
import { AllTypesService } from './all-types.service';
import { ApiBasicAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReturnAllTypesDto } from './dto/return-all-types.dto';

@ApiBasicAuth()
@ApiTags('all-types')
@Controller('all-types')
export class AllTypesController {
  constructor(private readonly allTypesService: AllTypesService) {}

  @ApiResponse({ type: ReturnAllTypesDto })
  @Get()
  async findAll() {
    return await this.allTypesService.findAll();
  }
}
