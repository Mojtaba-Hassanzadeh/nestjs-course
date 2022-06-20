import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FallbackExceptionFilter } from './filters/fallback.filter';
import { HttpExceptionFilter } from './filters/http.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(
    new FallbackExceptionFilter(),
    new HttpExceptionFilter(),
  );

  await app.listen(3000);
}
bootstrap();
