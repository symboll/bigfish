import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @ApiProperty({ description: '用户名', example: 'zhangsan' })
  @prop()
  username: string;

  @ApiProperty({ description: '密码', example: '123456' })
  @prop()
  password: string;
}
