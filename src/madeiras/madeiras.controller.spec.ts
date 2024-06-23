import { Test, TestingModule } from '@nestjs/testing';
import { MadeirasController } from './madeiras.controller';

describe('MadeirasController', () => {
  let controller: MadeirasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MadeirasController],
    }).compile();

    controller = module.get<MadeirasController>(MadeirasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
