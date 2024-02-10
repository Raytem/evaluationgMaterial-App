import { plainToInstance } from 'class-transformer';
import { IsBooleanString, IsEnum, IsNumberString, IsString, validateSync } from 'class-validator';
import { NodeEnv } from 'src/enums/node-env';

class EnvVariables {
  @IsEnum(NodeEnv)
  NODE_ENV: string;

  //app
  @IsString()
  APP_PROXY_HOST: string;
  @IsString()
  APP_HOST: string;
  @IsNumberString()
  APP_PORT: string;
  @IsString()
  APP_URL: string;
  @IsNumberString()
  APP_PROXY_PORT: string;
  @IsString()
  APP_PROXY_URL: string;

  //calculations
  @IsNumberString()
  CNT_OF_NUMBERS_AFTER_POINT: string;

  //file
  @IsString()
  FILE_STATIC_DIR_NAME: string;

  @IsString()
  FILE_MATERIAL_IMAGES_DIR_NAME: string;

  @IsString()
  FILE_TEMPLATES_DIR_NAME: string;

  @IsString()
  FILE_DESKTOP_SETUP_DIR_PATH: string;

  @IsString()
  FILE_DESKTOP_SETUP_NAME: string;

  @IsNumberString()
  FILE_RESIZE_SIZE: string;

  @IsNumberString()
  FILE_MAX_SIZE: string;

  @IsNumberString()
  FILE_UPLOAD_LIMIT: string;

  //setup-extension
  @IsString()
  SETUP_EXTENSION_MAC: string;
  @IsString()
  SETUP_EXTENSION_WIN: string;
  @IsString()
  SETUP_EXTENSION_LINUX: string;

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
