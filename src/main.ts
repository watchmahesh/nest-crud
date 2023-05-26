import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());

  // Validation
  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: true }));
  // app.setGlobalPrefix('api');

  // OpenAPI Specification
  const config = new DocumentBuilder()
    .setTitle('Products Demo API')
    .setDescription(
      'A REST API using Nestjs to create CRUD operations on products table',
    )
    .setVersion('1.0')
    .addTag('products')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);
  await app.listen(3000);
}
bootstrap();
