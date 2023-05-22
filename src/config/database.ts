import * as dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: 5432,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: false,
  logging: false,
  entities: ["src/entities/*{.ts,.js}"],
  migrations: ["src/migrations/*{.ts,.js}"],
  subscribers: ["src/subscribers/**/*{.ts,.js}"],
});
