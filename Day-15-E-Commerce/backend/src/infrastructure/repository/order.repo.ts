import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { OrderEntity } from "src/entities/order.entity";

@Injectable()
export class OrderRepository extends Repository<OrderEntity> {
    constructor(private readonly dataSource: DataSource) {
        super(OrderEntity, dataSource.createEntityManager());
    }

    async createOrder(user_uuid: string, address: string, total_price: number) {

        const order = this.create({
            user_uuid,
            address,
            total_price
        });

        return await this.save(order);
    }
}