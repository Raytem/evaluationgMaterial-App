import { plainToInstance } from 'class-transformer';
import {
  IsBooleanString,
  IsNumberString,
  IsString,
  validateSync,
} from 'class-validator';

class EnvVariables {
  //app
  @IsString()
  APP_HOST: string;
  @IsNumberString()
  APP_PORT: string;

  //file
  @IsString()
  FILE_STATIC_DIR_NAME: string;

  @IsString()
  FILE_MATERIAL_IMAGES_DIR_NAME: string;

  @IsString()
  FILE_TEMPLATES_DIR_NAME: string;

  @IsNumberString()
  FILE_RESIZE_SIZE: string;

  @IsNumberString()
  FILE_MAX_SIZE: string;

  @IsNumberString()
  FILE_UPLOAD_LIMIT: string;

  //db
  @IsString()
  DB_TYPE: string;
  @IsString()
  DB_HOST: string;
  @IsNumberString()
  DB_PORT: string;
  @IsString()
  DB_USERNAME: string;
  @IsString()
  DB_PASSWORD: string;
  @IsString()
  DB_NAME: string;
  @IsBooleanString()
  DB_SYNCHRONIZE: string;
}

export const validate = (config: Record<string, unknown>) => {
  const validatedConfig = plainToInstance(EnvVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
};
