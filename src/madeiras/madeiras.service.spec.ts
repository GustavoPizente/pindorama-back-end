import { Test, TestingModule } from '@nestjs/testing';
import { MadeirasService } from './madeiras.service';

describe('MadeirasService', () => {
  let service: MadeirasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MadeirasService],
    }).compile();

    service = module.get<MadeirasService>(MadeirasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
