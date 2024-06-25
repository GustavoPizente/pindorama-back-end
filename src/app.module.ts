import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MadeirasModule } from './madeiras/madeiras.module';
import { Madeiras } from './madeiras/madeiras.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [Madeiras],
        synchronize: true, // Não use em produção - pode causar perda de dados
      }),
      inject: [ConfigService],
    }),
    MadeirasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
