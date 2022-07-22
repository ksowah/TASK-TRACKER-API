import { Request, Response } from "express";



export const getTodo = (req: Request, res: Response) => {
    res.status(200).send("<h1>This is a typescript express server</h1>")
}
