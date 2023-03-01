import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfile } from './entity/user-profile.entity';
import { Subscribers } from './entity/subscriber.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserProfile, Subscribers])],
  exports: [],
  controllers: [],
  providers: [],
})
export class UserModule {}