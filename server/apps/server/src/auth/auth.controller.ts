import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType,DocumentType } from '@typegoose/typegoose';
import { User } from '@libs/db/models/user.models';
import { AuthGuard } from '@nestjs/passport'
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt'
import { CurrentUser } from './current-user.decorator';


@Controller('auth')
@ApiTags('用户')
export class AuthController {
  constructor (
    private jwtService :JwtService,
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
  @UseGuards(AuthGuard('local'))
  async login(@Body() dto: LoginDto, @CurrentUser() user: DocumentType<User>) {
    return {
      token: this.jwtService.sign(String(user._id))
    }
  }

  @Get('userInfo')
  @ApiOperation({ summary: '获取用户信息' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getUserInfo(@CurrentUser() user: DocumentType<User>) {
    return user
  }
}
