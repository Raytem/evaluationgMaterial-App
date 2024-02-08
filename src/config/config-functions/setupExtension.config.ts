import { registerAs } from '@nestjs/config';

export const setupExtensionConfig = registerAs('setupExtension', () => ({
  mac: process.env.SETUP_EXTENSION_MAC,
  win: process.env.SETUP_EXTENSION_WIN,
}));
