import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Entity('alluser')
export class AllUser {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ unique: false })
    username: string;

    @Column({ unique: true })
    email: string;
    @Column()
    password: string;
   
}

