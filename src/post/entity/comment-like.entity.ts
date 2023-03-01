import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { UserProfile } from "src/user/entity/user-profile.entity";
import { Comment } from "./comment.entity";

@Entity('comment_like')
export class CommentLike {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => UserProfile)
    @JoinColumn({ name: 'author_id' })
    author: UserProfile;

    @ManyToOne(() => Comment)
    @JoinColumn({ name: 'comment_id' })
    comment: Comment;
}