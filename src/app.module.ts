import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

const environment = process.env.NODE_ENV || 'development'

@Module({
  imports: [
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${environment}`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(
    process.env.MONGO_WRITE_CONNECTION_STRING,
{
      useNewUrlParse: true,
      useUnifiedTopology: true,
    }),
  ],
})
export class AppModule {}
