import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MadeirasController } from './madeiras.controller';
import { MadeirasService } from './madeiras.service';
import { Madeiras } from './madeiras.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Madeiras])],
  controllers: [MadeirasController],
  providers: [MadeirasService]
})
export class MadeirasModule {}
