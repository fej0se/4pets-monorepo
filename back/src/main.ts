import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  var whitelist = [
    'https://4pets.company',
    'https://www.4pets.company',
    'https://falling-shadow-8881.fly.dev',
    'http://localhost',
  ];

  app.setGlobalPrefix('api/v1');

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
