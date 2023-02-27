import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { UserProfile } from "src/user/entity/user-profile.entity";

@Entity('post')
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    media: string;

    @Column()
    description: string;

    @ManyToOne(() => UserProfile)
    @JoinColumn({ name: 'user_profile_id' })
    user_profile: UserProfile;
}
