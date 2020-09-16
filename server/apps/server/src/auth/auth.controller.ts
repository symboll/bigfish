import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags, ApiProperty, ApiOperation } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from '@libs/db/models/user.models';

export class RegisterDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}


@Controller('auth')
@ApiTags('用户')
export class AuthController {
  constructor (
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>
  ) {}

  @Post('register')
  @ApiOperation({ summary: '注册用户' })
  async register(@Body() dto: RegisterDto) {
    const { username, password } = dto
    const user = await this.userModel.create({
      username,
      password
    })

    return user;
  }

  @Post('login')
  @ApiOperation({ summary: '登录' })
  async login(@Body() dto) {
    return dto
  }

  @Get('userInfo')
  @ApiOperation({ summary: '获取用户信息' })
  async getUserInfo() {
    return {}
  }
}
