import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MadeirasModule } from './madeiras/madeiras.module';
import { Madeiras } from './madeiras/madeiras.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '279413',
      database: 'pindorama',
      entities: [Madeiras],
      synchronize: true, // Atenção: Não use em produção - pode causar perda de dados
    }),
    MadeirasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}