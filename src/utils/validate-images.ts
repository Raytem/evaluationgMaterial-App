import { ConfigType } from '@nestjs/config';
import { fileConfig } from 'src/config/config-functions/file.config';
import { Multer } from 'multer';
import { BadRequestException } from '@nestjs/common';

export const validateImages = (
  fileCfg: ConfigType<typeof fileConfig>,
  images: Multer.File[],
) => {
  if (images.length) {
    if (images.length > fileCfg.uploadLimit) {
      throw new BadRequestException(
        `Exceeded the limit on the number of images: ${fileCfg.uploadLimit}`,
      );
    }

    images.forEach((img) => {
      if (!/image\/*/.test(img.mimetype)) {
        throw new BadRequestException(
          `Unsupported file type, file: ${img.originalname}`,
        );
      }
      if (img.size > fileCfg.maxSize) {
        throw new BadRequestException(
          `Exceeded the file size limit: ${fileCfg.maxSize} bytes, file: ${img.originalname}`,
        );
      }
    });
  }
};
