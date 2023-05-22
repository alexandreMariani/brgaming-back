import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { Restaurant } from "../entities/restaurant";

export default class RestaurantController {
  create = async (req: Request, res: Response) => {
    try {
      const restaurantRepository = AppDataSource.getRepository(Restaurant);
      const { name, document, type } = req.body;

      if (!name || !document || !type)
        return res.status(404).send("Dados Invalidos!");

      const restaurant = new Restaurant(name, document, type);
      const createdrestaurant = await restaurantRepository.save(restaurant);

      return res.status(201).send(createdrestaurant);
    } catch {
      return res.status(400);
    }
  };

  getAllRestaurants = async (req: Request, res: Response) => {
    try {
      const restaurantRepository = AppDataSource.getRepository(Restaurant);

      let restaurants: Restaurant[] = await restaurantRepository.find();

      return res.status(200).send(restaurants);
    } catch (error) {
      return res.status(500).json({ Error: error });
    }
  };
}
