import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { Restaurant } from "../entities/restaurant";
import { Rule } from "../entities/rule";

export default class RuleController {
  create = async (req: Request, res: Response) => {
    try {
      const ruleRepository = AppDataSource.getRepository(Rule);
      const restaurantRepository = AppDataSource.getRepository(Restaurant);

      const { start, end, day, restaurantId } = req.body;

      if (!start || !end || !day || !restaurantId)
        return res.status(404).send("Dados Invalidos!");

      if (
        parseInt(start) > parseInt(end) ||
        parseInt(end) > 2360 ||
        parseInt(start) < 0
      )
        return res.status(404).send("Dados Invalidos!");

      let restaurant: any = await restaurantRepository.findOneBy({
        id: restaurantId,
      });

      if (!restaurant) res.status(404).send("Restaurante não encontrado!");

      const rule = new Rule(start, end, day);
      rule.restaurant = restaurant;

      const createdrestaurant = await ruleRepository.save(rule);

      return res.status(201).send(createdrestaurant);
    } catch {
      return res.status(400).send("Erro!");
    }
  };

  deleteRule = async (req: Request, res: Response) => {
    try {
      const ruleRepository = AppDataSource.getRepository(Rule);
      const rule_id = Number(req.params["rule_id"]);

      let rule: any = await ruleRepository.findOneBy({
        id: rule_id,
      });

      if (!rule) return res.sendStatus(404);

      await ruleRepository.delete({ id: rule_id });

      return res.sendStatus(204);
    } catch (e) {
      return res.status(400).json({ error: "erro" });
    }
  };
}
