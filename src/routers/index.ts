import { Express } from "express";
import RestaurantRouter from "./restaurant.router";

export default (app: Express) => {
  const restaurantrouter = RestaurantRouter();
  app.use("/api", restaurantrouter);
};
