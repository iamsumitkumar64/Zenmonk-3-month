import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('order_item')
export class ProductEntity {
    @PrimaryGeneratedColumn("uuid")
    uuid: string;

    @Column({ type: "uuid" })
    order_id: string;

    @Column({ type: "int" })
    price: number;

    @Column({ type: "int" })
    quantity: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}
