import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('app', () => ({
  nodeEnv: process.env.NODE_ENV,
  proxyPort: +process.env.APP_PROXY_PORT,
  proxyUrl: process.env.APP_PROXY_URL,
  port: +process.env.APP_PORT,
  url: process.env.APP_URL,
  host: process.env.APP_HOST,
}));
