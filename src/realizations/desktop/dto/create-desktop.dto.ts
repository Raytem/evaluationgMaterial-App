import { ApiProperty } from '@nestjs/swagger';

export class CreateDesktopDto {
  @ApiProperty({
    type: String,
    format: 'binary',
    required: true,
    description: `desktop application setup`,
  })
  setup: string;

  @ApiProperty({
    type: String,
    format: 'binary',
    required: true,
    description: `desktop application update`,
  })
  update: string;
}
