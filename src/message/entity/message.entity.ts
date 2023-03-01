import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinTable, Column, JoinColumn } from "typeorm";
import { UserProfile } from "src/user/entity/user-profile.entity";

@Entity('message')
export class Message {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    message_text : string;

    @ManyToOne(()=> UserProfile)
    @JoinColumn({name: "sender_id"})
    sender: UserProfile;

    @ManyToOne(()=> UserProfile)
    @JoinColumn({name: "reciever_id"})
    reciever: UserProfile;
}