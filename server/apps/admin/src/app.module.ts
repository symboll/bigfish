import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express'
import { CommonModule } from 'libs/common/src';

@Module({
  imports: [
    // DbModule,
    CommonModule,
    UsersModule,
    CoursesModule,
    EpisodesModule,
    MulterModule.register({
      dest: 'upload'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
