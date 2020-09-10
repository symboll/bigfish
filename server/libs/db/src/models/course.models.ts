import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Course {
  @ApiProperty({ description: '课程标题'})
  @prop()
  title: string;

  @ApiProperty({ description: '封面图' })
  @prop()
  cover: string;

 
}
