import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from 'src/shared/prisma/prisma.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { CompanyService } from 'src/company/company.service';
import { SubcompanyService } from 'src/company/subcompany/subcompany.service';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        secure: false,
        service: 'gmail',
        port: 587,
        ignoreTLS: false,
        auth: {
          user: process.env.SENDERMAIL,
          pass: process.env.MAILPASS,
        },
      },
      defaults: {
        from: process.env.SENDERMAIL,
        subject: 'Password Reset',
      },
    }),
  ],
  providers: [UserService, CompanyService, SubcompanyService],
  controllers: [UserController],
})
export class UserModule {}
