import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
import { User } from 'src/decorators/reqUser.decorator';
import { UserEntity } from './entities/user.entity';
import { ApiBasicAuth, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiBasicAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

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
  @ApiResponse({
    type: UserEntity,
    isArray: true,
  })
  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.userService.findAll(paginationDto);
  }

  @ApiResponse({
    type: UserEntity,
  })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.userService.findOne(id);
  }

  @ApiResponse({
    type: UserEntity,
  })
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
    @User() reqUser: UserEntity,
  ) {
    return await this.userService.update(id, updateUserDto, reqUser);
  }

  @ApiResponse({
    type: UserEntity,
  })
  @Delete(':id')
  async remove(@Param('id') id: number, @User() reqUser: UserEntity) {
    return await this.userService.remove(id, reqUser);
  }
}
