import { NextFunction, Request, Response } from "express"
import { ErrorApi } from "../helpers/error-api"
export function errorHandling(error: Error & Partial<ErrorApi>, req: Request, res: Response, next: NextFunction) {
    console.log(error)
    const statusCode = error.statusCode ?? 500
    const message = error.statusCode ? error.message : 'Internal Server Error'
    return res.status(statusCode).json({ message: message })
}