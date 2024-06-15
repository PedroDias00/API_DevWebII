import { Router } from "express";
import PostController from "../controllers/PostController";

const PostRouter = Router();

PostRouter.post("/post/create", PostController.insertPost);

PostRouter.post("/post/getallpost", PostController.getAllPost);

PostRouter.get("/post/getPostByUserId/:id", PostController.getPostbyUserId);

PostRouter.patch("/post/update/:id", PostController.updatePost);

PostRouter.delete("/post/delete/:id", PostController.deletePost);

export default PostRouter;
