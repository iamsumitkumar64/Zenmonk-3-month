import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class OrderItemMigration1773384431660 implements MigrationInterface {
    name = "OrderItemMigration1773384431660"

    public async up(queryRunner: QueryRunner): Promise<void> {
             await queryRunner.createTable(
            new Table({
                name: "order_item",
                columns: [
                    { name: "uuid", type: "uuid", isPrimary: true, isGenerated: true, generationStrategy: "uuid", default: "uuid_generate_v4()" },
                    { name: "order_id", type: "uuid" },
                    { name: "product_id", type: "uuid" },
                    { name: "price", type: "int" },
                    { name: "quantity", type: "int" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "updated_at", type: "timestamp", default: "now()" },
                    { name: "deleted_at", type: "timestamp", isNullable: true },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("order_item", true);
    }
}