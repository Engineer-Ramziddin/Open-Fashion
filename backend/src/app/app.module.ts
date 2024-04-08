import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from '../products/products.module';
import { UsersModule } from '../users/users.module';
import { CommandModule } from 'nestjs-command';
import { CartModule } from '../cart/cart.module';
import { OrderModule } from '../orders/order.module';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development'],
    }),
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.DB_URL,
      }),
    }),
    CommandModule,
    ProductsModule,
    UsersModule,
    CartModule,
    OrderModule,
    CloudinaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
