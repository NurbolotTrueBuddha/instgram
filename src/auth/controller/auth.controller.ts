import { Controller, Request, Body, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../utils/dto/login.dto';

@ApiTags('Auth')
@Controller()
export class AuthController {

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req, @Body() loginData: LoginDto) {
    return req.user;
  }
  
}