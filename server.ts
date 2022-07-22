import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from "./routes/todoRoute"

dotenv.config();

const app: Express = express()
const PORT = process.env.PORT

app.use("/api/todo", router)


app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))
