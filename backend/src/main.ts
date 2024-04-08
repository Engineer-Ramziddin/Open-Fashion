import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { corsConfig, } from './utils/config';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session'; // express-session ni chaqiring
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const MongoDBStore = require('connect-mongodb-session')(session);

let store = new MongoDBStore({
  uri: process.env.DB_URL,
  collection: 'mySessions'
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsConfig());
  store.on('error', function(error) {
    console.log(error);
  });
  
  app.use(
    require('express-session')({
      secret: process.env.SESSION_SEC,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      },
      store: store,
      resave: true,
      saveUninitialized: true,
    }),
  );
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
   const config = new DocumentBuilder()
     .setTitle('Cats example')
     .setDescription('The cats API description')
     .setVersion('1.0')
     .build();
   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
