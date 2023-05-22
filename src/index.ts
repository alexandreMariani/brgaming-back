import cors from "cors";
import express from "express";
import { AppDataSource } from "./config/database";
import RouterBuilder from "./routers";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    app.use(express.json());

    app.use(cors());

    RouterBuilder(app);
    const PORT = 5000;
    console.log(`Server started on port: ${PORT}`);

    app.listen(PORT);
  })
  .catch((err) => {
    process.exit(1);
  });
