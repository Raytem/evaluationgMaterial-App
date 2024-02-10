import { ApiProperty } from '@nestjs/swagger';

export class CreateDesktopDto {
  @ApiProperty({
    type: String,
    format: 'binary',
    required: true,
    description: 'executable file for win/mac',
  })
  setup: string;
}
