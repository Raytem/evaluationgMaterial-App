import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from 'swagger.config';
import path from 'path';
import serve from 'express-static';
import { NodeEnv } from './enums/node-env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    exposedHeaders: ['x-total-count'],
  });

  const configService = app.get(ConfigService);
  const port = configService.get('app.port');

  const staticDirName = configService.get('file.staticDirName');
  const staticDirPath = path.join(process.cwd(), staticDirName);
  app.use(`/${staticDirName}`, serve(staticDirPath));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  setupSwagger(app);
  await app.listen(port);
  console.log(`----Server started on port: ${port}\n`);
}
bootstrap();
