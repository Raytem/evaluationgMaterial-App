import { registerAs } from '@nestjs/config';
import path from 'path';

export const fileConfig = registerAs('file', () => ({
  staticDirName: process.env.FILE_STATIC_DIR_NAME,
  materialImagesDirName: process.env.FILE_MATERIAL_IMAGES_DIR_NAME,
  templatesDirName: process.env.FILE_TEMPLATES_DIR_NAME,

  desktopSetupDirPath: path.join(
    ...process.env.FILE_DESKTOP_SETUP_DIR_PATH.split('.'),
  ),
  desktopUpdateDirPath: path.join(
    ...process.env.FILE_DESKTOP_UPDATE_DIR_PATH.split('.'),
  ),
  desktopSetupName: process.env.FILE_DESKTOP_SETUP_NAME,
  desktopUpdateName: process.env.FILE_DESKTOP_UPDATE_NAME,

  resizeSize: +process.env.FILE_RESIZE_SIZE,
  maxSize: +process.env.FILE_MAX_SIZE,
  uploadLimit: +process.env.FILE_UPLOAD_LIMIT,
}));
