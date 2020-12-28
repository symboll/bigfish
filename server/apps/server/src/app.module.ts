import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from 'libs/common/src';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    CommonModule,
    AuthModule,
    CoursesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
