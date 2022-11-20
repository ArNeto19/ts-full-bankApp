import { Router } from "express";
import { AuthenticateController } from "./controllers/AuthenticateController"
import { TransactionController } from "./controllers/TransactionConstroller";
import { UserController } from "./controllers/UserController";
import { authMiddleware } from "./middleware/authMiddleware";

const routes = Router();
const authController = new AuthenticateController();
const userController = new UserController();

routes.get("/authenticate", authMiddleware, authController.getProfile)
routes.post("/authenticate", authController.login);
routes.post("/register", userController.create);


// routes.get("/transactions");
// routes.post("/transaction", new TransactionController().create);

export default routes;
