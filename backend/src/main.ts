import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'
import * as passport from 'passport'

async function bootstrap() {
  var cors = require('cors')
  const app = await NestFactory.create(AppModule); 
  app.use(cors())
  await app.listen(3001);
}
bootstrap();
