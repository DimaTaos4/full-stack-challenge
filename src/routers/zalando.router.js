import { Router } from "express";
import { addZalandoDataController } from "../controllers/zalando.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

const router = Router();

router.post("/", authMiddleware, adminMiddleware, addZalandoDataController);

export default router;

// Not explicitly required, but the admin creates the data for Zalando
// Nicht explizit erforderlich, aber der Admin erstellt die Daten für Zalando