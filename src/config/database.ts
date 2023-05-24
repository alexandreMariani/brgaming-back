import * as dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "motty.db.elephantsql.com",
  port: 5432,
  username: "lwmrhaje",
  password: "nGevHyOZL0RMq0igUPvy5utvHyfsMCTP",
  database: "lwmrhaje",
  synchronize: false,
  logging: false,
  entities: ["src/entities/*{.ts,.js}"],
  migrations: ["src/migrations/*{.ts,.js}"],
  subscribers: ["src/subscribers/**/*{.ts,.js}"],
});
