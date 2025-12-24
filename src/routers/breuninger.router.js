import { Router } from "express";

import { addBreuningerDataController } from "../controllers/breuninger.controller.js";

const breuningerRouter = Router();

breuningerRouter.post("/", addBreuningerDataController);

export default breuningerRouter;