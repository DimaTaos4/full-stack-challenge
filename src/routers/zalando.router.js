import { Router } from "express";

import { addDataZalandoController } from "../controllers/zalando.controller.js";

const zalandoRouter = Router();

zalandoRouter.post("/", addDataZalandoController)

export default zalandoRouter;