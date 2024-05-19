import { ApiProperty } from '@nestjs/swagger';

export class HttpExceptionBodyResponse {
  @ApiProperty({ type: Number })
  statusCode: number;

  @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] })
  message: string | string[];

  @ApiProperty({ type: String })
  error: string;
}
