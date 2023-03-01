import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { MessageModule } from './message/message.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { UserProfile } from './user/entity/user-profile.entity';
import { User } from './auth/entity/user.entity';
import { Post } from './post/entity/post.entity';
import { PostLike } from './post/entity/post-like.entity';
import { Comment } from './post/entity/comment.entity';
import { Subscribers } from './user/entity/subscriber.entity';
import { CommentLike } from './post/entity/comment-like.entity';
import { Message } from './message/entity/message.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'keiz',
      database: 'instagram',
      entities: [UserProfile, User, Post, PostLike, Comment, Subscribers, CommentLike, Message],
      synchronize: true,
      logging: true
    }),
    AuthModule, 
    MessageModule, 
    PostModule, 
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
