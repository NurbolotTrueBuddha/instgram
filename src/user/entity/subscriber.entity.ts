import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinTable } from "typeorm";
import { UserProfile } from "./user-profile.entity";


@Entity('subscribers')
export class Subscribers {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(()=> UserProfile)
    @JoinTable( {name: 'to_subs_id'} )
    subscribe : UserProfile;

    @ManyToOne(()=> UserProfile)
    @JoinTable( {name: 'follower_id'} )
    follower : UserProfile;
}