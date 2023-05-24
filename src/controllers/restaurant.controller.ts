import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { Restaurant } from "../entities/restaurant";

export default class RestaurantController {
  create = async (req: Request, res: Response) => {
    try {
      const restaurantRepository = AppDataSource.getRepository(Restaurant);
      const { name, document, type } = req.body;

      if (!name || !document || !type)
        return res.status(400).send("Dados Invalidos!");

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

  getRestaurantById = async (req: Request, res: Response) => {
    try {
      const restaurantRepository = AppDataSource.getRepository(Restaurant);
      const restaurant_id = Number(req.params["restaurant_id"]);

      let restaurant: any = await restaurantRepository.findOneBy({
        id: restaurant_id,
      });

      if (!restaurant) return res.status(400);

      return res.status(200).send(restaurant);
    } catch (error) {
      return res.status(500).json({ Error: error });
    }
  };

  updateRestaurant = async (req: Request, res: Response) => {
    try {
      const restaurantRepository = AppDataSource.getRepository(Restaurant);
      const restaurant_id = Number(req.params["restaurant_id"]);

      const { name, document, type } = req.body;

      let restaurant: any = await restaurantRepository.findOneBy({
        id: restaurant_id,
      });

      if (!restaurant) return res.sendStatus(404);

      restaurant.name = name;
      restaurant.document = document;
      restaurant.type = type;

      await restaurantRepository.save(restaurant);

      return res.status(200).send("ok");
    } catch (error) {
      return res.status(500).json({ Eroor: error });
    }
  };

  deleteRestaurant = async (req: Request, res: Response) => {
    try {
      const restaurantRepository = AppDataSource.getRepository(Restaurant);
      const restaurant_id = Number(req.params["restaurant_id"]);

      let restaurant: any = await restaurantRepository.findOneBy({
        id: restaurant_id,
      });

      if (!restaurant) return res.sendStatus(404);

      await restaurantRepository.delete({ id: restaurant_id });

      return res.sendStatus(204);
    } catch (e) {
      return res.status(400).json({ error: "Erro" });
    }
  };

  isOpen = async (req: Request, res: Response) => {
    try {
      const restaurantRepository = AppDataSource.getRepository(Restaurant);
      const { time, day } = req.body;

      if (!time || !day) return res.status(400).send("Dados Invalidos!");

      const restaurant_id = Number(req.params["restaurant_id"]);

      let restaurant: any = await restaurantRepository.findOneBy({
        id: restaurant_id,
      });

      if (!restaurant) return res.status(404);

      for (let i = 0; i < restaurant.rule.length; i++) {
        if (restaurant.rule[i].day == day) {
          if (
            parseInt(time) >= parseInt(restaurant.rule[i].start) &&
            parseInt(time) < parseInt(restaurant.rule[i].end)
          ) {
            return res.status(200).send("open");
          }
        }
      }

      return res.status(200).send("close");
    } catch {
      return res.status(400);
    }
  };
}
