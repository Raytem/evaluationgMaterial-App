import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber } from 'class-validator';

export class CreateConditionDto {
  @ApiProperty({ type: Boolean })
  @IsBoolean()
  isPositive: boolean;

  @ApiProperty({ type: Number })
  @IsNumber()
  minAirTemp: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  maxAirHumidity: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  avgAirSpeed: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  residenceTime: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  torsionAngle: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  stretchingCompression: number;
}
