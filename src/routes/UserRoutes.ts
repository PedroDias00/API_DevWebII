import { Router } from "express";
import UserController from "../controllers/UserController";

const UserRouter = Router();

UserRouter.get("/users", UserController.listUsers);

UserRouter.post("/user", UserController.createUser);

UserRouter.patch("/user/:id", UserController.updateUser);

UserRouter.delete("/user/:id", UserController.deleteUser);

export default UserRouter;
