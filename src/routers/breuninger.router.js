import { Router } from "express";

import { addBreuningerDataController } from "../controllers/breuninger.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

const breuningerRouter = Router();

breuningerRouter.post(
    "/",
    authMiddleware,
    adminMiddleware,
    addBreuningerDataController
);

export default breuningerRouter;

// Not explicitly required, but the admin creates the data for Breuninger
// Nicht explizit erforderlich, aber der Admin erstellt die Daten für Breuninger