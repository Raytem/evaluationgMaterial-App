import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/realizations/user/user.module';
import { UserService } from 'src/realizations/user/user.service';
import { PaginationService } from 'src/pagination/pagination.service';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UserModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, UserService, PaginationService, LocalStrategy],
  exports: [AuthModule],
})
export class AuthModule {}
