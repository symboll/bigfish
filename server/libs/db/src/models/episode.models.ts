import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Course } from './course.models';

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Episode {
  @ApiProperty({ description: '课时名称'})
  @prop()
  name: string;

  @ApiProperty({ description: '资源' })
  @prop()
  file: string;

  @ApiProperty({ description: '课程' })
  @prop({ ref:'Course' })
  course: Ref<Course> 
}
