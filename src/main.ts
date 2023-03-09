import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { createDocument } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  SwaggerModule.setup('api/docs', app, createDocument(app));
  await app.listen(process.env.APP_PORT || 3302);
  console.info('SERVER IS RUNNING ON PORT', process.env.APP_PORT || 3302);
}
bootstrap();
