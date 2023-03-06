import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserI } from '../utils/interface/user.interface';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<UserI> {

    const user = {
        password: 'ulan',
        username: 'ulan',
        id: '1'
    }

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    return null;   
  }

  async login(user: UserI) {
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}