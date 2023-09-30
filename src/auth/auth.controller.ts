import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/realizations/user/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { Public } from 'src/decorators/public.decorator';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/realizations/user/entities/user.entity';

@ApiTags('auth')
@Public()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiResponse({ type: UserEntity })
  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto);
  }

  @ApiResponse({ type: UserEntity })
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
