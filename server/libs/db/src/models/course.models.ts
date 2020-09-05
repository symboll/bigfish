import { prop, modelOptions, Ref, arrayProp } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Episode } from './episode.models';

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Course{
  @ApiProperty({ description: '课程标题' })
  @prop()
  title: string

  @ApiProperty({ description: '封面图' })
  @prop()
  cover: string

  @ApiProperty({ description: '课时' })
  @arrayProp({ itemsRef: 'Episode' })
  episodes: Ref<Episode> []

}