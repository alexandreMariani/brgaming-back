import { Express } from "express";
import SwaggerUi from "swagger-ui-express";
import Docs from "../swagger.json";
import RestaurantRouter from "./restaurant.router";
import RuleRouter from "./rule.router";

export default (app: Express) => {
  const restaurantRouter = RestaurantRouter();
  const ruleRouter = RuleRouter();

  app.use("/api", restaurantRouter);
  app.use("/api", ruleRouter);
  app.use("/swaggerUi", SwaggerUi.serve, SwaggerUi.setup(Docs));
};
