import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = {
        password: 'password',
        username: 'username',
        id: 1
    }

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}