import { Router } from "express";
import { getRetailersController } from "../controllers/retailers.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

const retailersRouter = Router();

retailersRouter.get("/", authMiddleware, adminMiddleware, getRetailersController);


export default retailersRouter;