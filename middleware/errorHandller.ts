import { NextFunction, Request, Response } from "express";


export const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.json({error: err.message, stack: err.stack})
}
