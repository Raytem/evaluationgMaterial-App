import { ApiProperty } from '@nestjs/swagger';

export class CreateDesktopDto {
  @ApiProperty({
    type: String,
    format: 'binary',
    required: true,
    isArray: true,
    maxItems: 1,
    description: '.dmg file',
  })
  macSetup: string;

  @ApiProperty({
    type: String,
    format: 'binary',
    required: true,
    isArray: true,
    maxItems: 1,
    description: '.exe file',
  })
  winSetup: string;

  // @ApiProperty({
  //   type: String,
  //   format: 'binary',
  //   required: true,
  //   description: `desktop application update`,
  // })
  // update: string;
}
