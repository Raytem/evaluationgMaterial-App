import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from 'swagger.config';
import path from 'path';
import serve from 'express-static';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get('app.port') || 3000;

  const staticDirName = configService.get('file.staticDirName');
  const staticDirPath = path.join(process.cwd(), staticDirName);
  app.use(`/${staticDirName}`, serve(staticDirPath));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  setupSwagger(app);
  await app.listen(port);
  console.log(`----Server started on port: ${port}\n`);
}
bootstrap();
