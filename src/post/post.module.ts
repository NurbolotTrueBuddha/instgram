import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entity/post.entity';
import { PostLike } from './entity/post-like.entity';
import { Comment } from './entity/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, PostLike, Comment])],
  exports: [],
  controllers: [],
  providers: [],
})
export class PostModule {}