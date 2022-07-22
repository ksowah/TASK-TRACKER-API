import express from "express"
import { getTodo } from "../controller/todoController"

const router = express.Router()

router.route("/").get(getTodo)

export default router
