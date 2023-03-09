import { Module } from '@nestjs/common';
import { SubcompanyService } from './subcompany.service';
import { SubcompanyController } from './subcompany.controller';

@Module({
  controllers: [SubcompanyController],
  providers: [SubcompanyService]
})
export class SubcompanyModule {}
