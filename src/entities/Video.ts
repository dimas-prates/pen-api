import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./Room";

@Entity('videos')//Map table videos in database
export class Video {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    title: string

    @Column({ type: 'text' })// if empty, it'll assume VARCHAR
    url: string

    @ManyToOne(() => Room, room => room.videos) //Create relation with Room forth and back
    @JoinColumn({ name: 'room_id' }) //informing the exact name of FK
    room: Room
}