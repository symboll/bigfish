import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.models';
import { Course } from './models/course.models';
import { Episode } from './models/episode.models';

const models = TypegooseModule.forFeature([User, Course, Episode])

@Global()
@Module({
  imports:[
    TypegooseModule.forRootAsync({
      useFactory () {
        return {
          uri: process.env.DB,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false
        }
      }
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
