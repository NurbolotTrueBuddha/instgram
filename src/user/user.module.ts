import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfile } from './entity/user-profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserProfile])],
  exports: [],
  controllers: [],
  providers: [],
})
export class UserModule {}