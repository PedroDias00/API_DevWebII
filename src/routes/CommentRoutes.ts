import { Router } from "express";
import CommentController from "../controllers/CommentController";

const CommentRouter = Router();

CommentRouter.post("/comment/create", CommentController.insertComment);

CommentRouter.post("/comment/getallcomment", CommentController.getAllComment);

CommentRouter.get("/comment/getcommentByUserId/:id", CommentController.getCommentbyUserId);

CommentRouter.patch("/comment/update/:id", CommentController.updateComment);

CommentRouter.delete("/comment/delete/:id", CommentController.deleteComment);

export default CommentRouter;