import { ConfigType } from '@nestjs/config';
import { fileConfig } from 'src/config/config-functions/file.config';
import { Multer } from 'multer';
export declare const validateImages: (fileCfg: ConfigType<typeof fileConfig>, images: Multer.File[]) => void;
