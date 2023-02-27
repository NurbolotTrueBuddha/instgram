import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { UserProfile } from "src/user/entity/user-profile.entity";
import { Post } from "./post.entity";

@Entity('comment')
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    text: string;

    @ManyToOne(() => UserProfile)
    @JoinColumn({ name: 'author_id' })
    author: UserProfile;

    @ManyToOne(() => Post)
    @JoinColumn({ name: 'post_id' })
    post: Post;
}
