import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud'
import { User } from '@libs/db/models/user.models';

@Crud({
  model: User
})
@Controller('users')
export class UsersController {
  constructor(
    @InjectModel(User) private readonly model
  ) {}
}
