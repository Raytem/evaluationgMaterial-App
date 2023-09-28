import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/realizations/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { BasicAuthStrategy } from './strategies/basic-auth.strategy';

@Module({
  imports: [UserModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, BasicAuthStrategy],
  exports: [AuthService],
})
export class AuthModule {}
