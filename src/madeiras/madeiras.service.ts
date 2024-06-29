import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Madeiras } from './madeiras.entity';

@Injectable()
export class MadeirasService {
  constructor(
    @InjectRepository(Madeiras)
    private MadeirasRepository: Repository<Madeiras>,
  ) {}

  

   create(name: string, cor: string, localidade: string): Promise<Madeiras> {
    const novaMadeira = new Madeiras();
    novaMadeira.name = name;
    novaMadeira.cor = cor;
    novaMadeira.localidade =  localidade;
    console.log('novoRegistro',novaMadeira);
    return this.MadeirasRepository.save(novaMadeira);
    
  }


 findMadeiras(name?: string, cor?: string, localidade?: string): Promise<Madeiras[]> {
    const where: any = {};
    
    if (name) {
      where.name = name.trim();
    }
    if (cor) {
      where.cor = cor.trim();
    }
    if (localidade) {
      where.localidade = localidade.trim();
    }
    
    console.log('Filtrando por:', where);
    
    return this.MadeirasRepository.find({ where });
  }
}

