import { Module } from '@nestjs/common';
import { Message } from './entity/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Message])
  ],
  exports: [],
  controllers: [],
  providers: [],
})
export class MessageModule {}