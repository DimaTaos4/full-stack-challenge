import { Router } from "express";
import { registerUserController, loginUserController } from "../controllers/users.controller.js";

const userRouter = Router();

userRouter.post("/register", registerUserController);
userRouter.post("/login", loginUserController);

export default userRouter;

// The registration endpoint is kept to demonstrate how users are created.The isAdmin flag was set manually in the Neon database.
// Der Registration-Endpunkt bleibt bestehen, um zu zeigen, wie Benutzer erstellt werden. Das isAdmin-Flag wurde manuell in der Neon-Datenbank gesetzt.