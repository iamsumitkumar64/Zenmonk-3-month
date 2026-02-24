//Data-Source imports
import { DataSource, DataSourceOptions } from "typeorm";

//Entities
import { UserEntity } from "src/entities/user.entity";

const options: DataSourceOptions = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5433,
    username: "postgres",
    password: "sumit123",
    database: "day1",
    entities: [UserEntity],
    synchronize: false,
    migrations: ['dist/infrastructure/database/migrations/*{.ts,.js}'],
};

const dataSource = new DataSource(options);

export { dataSource };