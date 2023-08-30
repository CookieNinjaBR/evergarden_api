import { Test, TestingModule } from '@nestjs/testing';
import { SensorService } from './sensor.service';

describe('SensorService', () => {
  let provider: SensorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SensorService],
    }).compile();

    provider = module.get<SensorService>(SensorService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
