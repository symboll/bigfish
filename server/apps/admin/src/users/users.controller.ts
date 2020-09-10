import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.models';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';


@Crud({
  model: User
})
@ApiTags('用户信息')
@Controller('users')
export class UsersController {
  constructor(
    @InjectModel(User) private readonly model:ReturnModelType<typeof User>
  ) {}

   
}
