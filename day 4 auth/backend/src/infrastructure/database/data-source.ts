//Data-Source imports
import { DataSource, DataSourceOptions } from "typeorm";

//Entities
import { UserEntity } from "src/entities/user.entity";

const options: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432, //5433
    username: "123",
    password: "123", //sumit123
    database: "123",
    entities: [UserEntity],
    synchronize: false,
    migrations: ['dist/infrastructure/database/migrations/*{.ts,.js}'],
};

const dataSource = new DataSource(options);

export { dataSource };