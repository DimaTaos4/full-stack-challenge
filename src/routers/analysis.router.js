import { Router } from "express";

import { getAnalysisController } from "../controllers/analysis.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";

const analysisRouter = Router();

analysisRouter.get("/", authMiddleware, getAnalysisController);


export default analysisRouter;