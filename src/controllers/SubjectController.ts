import { Request, Response } from "express"
import { subjectRepository } from "../repositories/subjectRepository";
export class SubjectController {
    async create(req: Request, res: Response) {
        const { name } = req.body;
        if (!name) {

            return res.status(400).json({ message: 'Name is required' })
        }
        const newSubject = subjectRepository.create({ name })

        await subjectRepository.save(newSubject)
        return res.status(201).json(newSubject)
    }
}