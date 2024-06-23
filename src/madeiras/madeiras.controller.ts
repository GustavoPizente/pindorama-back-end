import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { MadeirasService } from './madeiras.service';
import { Madeiras } from './madeiras.entity';

@Controller('madeiras')
export class MadeirasController {
  constructor(private readonly madeirasService: MadeirasService) {}

  @Post()
  async create(@Body('madeira') madeira: { name: string; cor: string; localidade: string}) {
    return this.madeirasService.create(madeira.name,madeira.cor,madeira.localidade);
  }


  @Get()
  async findMadeiras(
    @Query('name') name?: string,
    @Query('cor') cor?: string,
    @Query('localidade') localidade?: string,
  ): Promise<Madeiras[]> {
    return this.madeirasService.findMadeiras(name, cor, localidade);
  }
  

}
