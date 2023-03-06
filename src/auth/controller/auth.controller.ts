import { Controller, Request, Body, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { LoginDto } from '../utils/dto/login.dto';
import { LocalAuthGuard } from '../strategy/local-auth.guard';
import { AuthService } from '../service/auth.service';
import { AccessTokenDto } from '../utils/dto/access-token.dto';


@ApiTags('Auth')
@Controller()
export class AuthController {

  constructor(
    private authService: AuthService
  ) {}

  @ApiResponse({ status: 200, type: AccessTokenDto })
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Body() loginData: LoginDto) {
    return this.authService.login(req.user) // {access_token}
  }
  

}