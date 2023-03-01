import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { UserProfile } from "./user-profile.entity";


@Entity('subscribers')
export class Subscribers {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToMany(()=> UserProfile)
    @JoinTable({name: 'to_subs_id'})
    subscribe : UserProfile;

    @ManyToMany(()=> UserProfile)
    @JoinTable({name: 'follower_id'})
    follower : UserProfile;
}