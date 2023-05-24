import { Router } from "express";
import RuleController from "../controllers/rule.controller";

const router = Router();

export default (): Router => {
  const rulecontroller = new RuleController();

  router.post("/rule/create", rulecontroller.create);
  router.delete("/rule/:rule_id", rulecontroller.deleteRule);

  return router;
};
