import { registerAs } from '@nestjs/config';

export const calculationsConfig = registerAs('calculations', () => ({
  cntOfNumbersAfterPoint: +process.env.CNT_OF_NUMBERS_AFTER_POINT,
}));
