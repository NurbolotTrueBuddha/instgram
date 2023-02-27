import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { UserProfile } from "src/user/entity/user-profile.entity";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    user_password: string;

    @OneToOne(() => UserProfile)
    @JoinColumn({ name: 'user_profile_id' })
    user_profile: UserProfile;
}

