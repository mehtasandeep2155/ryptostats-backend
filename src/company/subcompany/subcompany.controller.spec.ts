import { Test, TestingModule } from '@nestjs/testing';
import { SubcompanyController } from './subcompany.controller';
import { SubcompanyService } from './subcompany.service';

describe('SubcompanyController', () => {
  let controller: SubcompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubcompanyController],
      providers: [SubcompanyService],
    }).compile();

    controller = module.get<SubcompanyController>(SubcompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
