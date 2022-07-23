import express, { Express } from 'express';
import dotenv from 'dotenv';
import router from "./routes/todoRoute"
import connectDB from './config/db';
import { handleError } from './middleware/errorHandller';

dotenv.config();

connectDB()

const app: Express = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
// app.use(express.urlencoded({extended: false}))
app.use("/api/todo", router)
app.use(handleError)

app.listen(PORT, ()=> console.log(`⚡Server running on port ${PORT}`))

/***  TODO: FIX CLIENT ERROR MESSAGE */
