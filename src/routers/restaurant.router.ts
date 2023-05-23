import { Router } from "express";
import RestaurantController from "../controllers/restaurant.controller";

const router = Router();

export default (): Router => {
  const restaurantcontroller = new RestaurantController();

  router.post("/restaurant/create", restaurantcontroller.create);
  router.get("/restaurant", restaurantcontroller.getAllRestaurants);
  router.put(
    "/restaurant/:restaurant_id",
    restaurantcontroller.updateRestaurant
  );
  router.delete(
    "/restaurant/:restaurant_id",
    restaurantcontroller.deleteRestaurant
  );

  return router;
};
