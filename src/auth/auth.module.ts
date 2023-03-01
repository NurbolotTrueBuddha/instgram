import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { AuthService } from './service/auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthController } from './controller/auth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}