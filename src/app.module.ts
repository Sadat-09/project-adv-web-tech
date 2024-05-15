import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AllUsersModule } from './all-user/all-user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BookingModule } from './booking/booking.module';
import { FaqModule } from './faq/faq.module';
import config from 'ormconfig';
// import { UserGuard } from './users/userguard';
import { ReviewModule } from './review/review.module';
@Module({
  imports: [AdminModule, AuthModule,TypeOrmModule.forRoot(config), AllUsersModule, UsersModule, BookingModule, FaqModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
