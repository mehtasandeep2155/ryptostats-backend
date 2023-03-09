import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { SubcompanyModule } from './subcompany/subcompany.module';

@Module({
  imports: [UserModule, CompanyModule, SubcompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
