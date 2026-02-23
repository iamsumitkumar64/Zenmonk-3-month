import { IsBoolean } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    uuid: string

    @Column({ type: "varchar" })
    username: string

    @Column({ type: "varchar" })
    email: string

    @Column({ type: "varchar" })
    password: string

    @Column({ type: "boolean", default: true })
    is_active: boolean;

    @CreateDateColumn({})
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}
