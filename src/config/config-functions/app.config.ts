import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('app', () => ({
  host: process.env.APP_HOST,
  port: +process.env.APP_PORT,
}));
