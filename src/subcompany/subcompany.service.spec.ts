import { Test, TestingModule } from '@nestjs/testing';
import { SubcompanyService } from './subcompany.service';

describe('SubcompanyService', () => {
  let service: SubcompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubcompanyService],
    }).compile();

    service = module.get<SubcompanyService>(SubcompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
