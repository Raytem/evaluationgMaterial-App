import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: String })
  @IsString()
  fio: string;

  @ApiProperty({ type: String })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    maxLength: 32,
    minLength: 8,
    description: 'should match regex: /^[0-9a-zA-Z!@#$%^&*]*$/g',
  })
  @IsString()
  @Length(8, 32)
  @Matches(/^[0-9a-zA-Z!@#$%^&*]*$/g)
  password: string;
}
