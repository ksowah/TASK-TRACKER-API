import express from "express"
import { deleteTodo, getTodo, postTodo, updateTodo } from "../controller/todoController"

const router = express.Router()

router.route("/").get(getTodo).post(postTodo)

router.route("/:todoID").delete(deleteTodo).put(updateTodo)

export default router


