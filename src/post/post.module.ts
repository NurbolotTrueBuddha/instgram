import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entity/post.entity';
import { PostLike } from './entity/post-like.entity';
import { Comment } from './entity/comment.entity';
import { CommentLike } from './entity/comment-like.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, PostLike, Comment, CommentLike])],
  exports: [],
  controllers: [],
  providers: [],
})
export class PostModule {}