import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity('user_profile')
export class UserProfile {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    user_photo: string
}