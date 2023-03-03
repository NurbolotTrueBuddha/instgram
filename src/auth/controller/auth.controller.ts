import { Controller, Request, Body, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../utils/dto/login.dto';
import { LocalAuthGuard } from '../strategy/local-auth.guard';
import { AuthService } from '../service/auth.service';


@ApiTags('Auth')
@Controller()
export class AuthController {

  constructor(
    private authService: AuthService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Body() loginData: LoginDto) {
    return this.authService.login(req.user) // {username, userId}
  }
  

}