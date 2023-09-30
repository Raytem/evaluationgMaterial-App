import { registerAs } from '@nestjs/config';

export const fileConfig = registerAs('file', () => ({
  staticDirName: process.env.FILE_STATIC_DIR_NAME,
  materialImagesDirName: process.env.FILE_MATERIAL_IMAGES_DIR_NAME,
  templatesDirName: process.env.FILE_TEMPLATES_DIR_NAME,
  resizeSize: +process.env.FILE_RESIZE_SIZE,
  maxSize: +process.env.FILE_MAX_SIZE,
  uploadLimit: +process.env.FILE_UPLOAD_LIMIT,
}));
