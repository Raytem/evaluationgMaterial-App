import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, isString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: String })
  @IsString()
  fio: string;

  @ApiProperty({ type: String })
  @IsEmail()
  email: string;

  @ApiProperty({ type: String })
  @IsString()
  password: string;
}
