import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvService } from './env/env.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const configSerivce = app.get(EnvService);
  const port = configSerivce.get('PORT');

  await app.listen(port);
}
bootstrap();
