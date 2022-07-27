import { NextFunction, Request, Response } from "express";
import todoSchema from "../models/todoModel"


export const getTodo = async (req: Request, res: Response) => {
    const todos = await todoSchema.find()
    if(!todos){
        res.status(400)
        throw new Error("No todos available")
    }
    res.status(200).json(todos)
}

export const postTodo = async (req: Request, res: Response) => {
    if(!req.body.todo){
        res.status(400)
        console.log("theres no body");
        throw new Error("Please add a todo")
    }

    console.log(req.body)

    const todo = await todoSchema.create(req.body)

    res.status(200).json(todo)
}

export const deleteTodo = async (req: Request, res: Response) => {
    const delTodo = await todoSchema.findById(req.params.todoID)

    if(!delTodo){
        res.status(400)
        throw new Error("this Todo does not exist")
    }

    res.send({todo: delTodo})
    await delTodo?.remove()
    
}

export const updateTodo = async (req: Request, res: Response) => {
    const todo = await todoSchema.findById(req.params.todoID) 

    if(!todo){
        res.status(400)
        throw new Error("this Todo does not exist")
    }

    const updatedTodo = await todoSchema.findByIdAndUpdate(req.params.todoID, req.body, {new: true})
    res.status(200).send(updatedTodo)
}