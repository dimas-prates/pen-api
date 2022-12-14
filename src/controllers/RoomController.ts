import { Request, Response } from "express";
import { roomRepository } from "../repositories/roomRepository";
import { subjectRepository } from "../repositories/subjectRepository";
import { videoRepository } from "../repositories/videoRepository";

export class RoomController {
    async create(req: Request, res: Response) {
        const { name, description } = req.body
        if (!name) {
            return res.status(400).json({ message: 'Name required' })
        }
        const newRoom = roomRepository.create({ name, description })
        await roomRepository.save(newRoom)
        return res.status(201).json(newRoom)
    }
    async createVideo(req: Request, res: Response) {
        const { title, url } = req.body
        const { idRoom } = req.params
        const room = await roomRepository.findOneBy({
            id: Number(idRoom),
        })
        if (!room) {
            return res.status(404).json({ message: 'Class not found' })
        }
        const newVideo = videoRepository.create({
            title,
            url,
            room
        })
        await videoRepository.save(newVideo)
        return res.status(201).json(newVideo)
    }
    async roomSubject(req: Request, res: Response) {
        const { subject_id } = req.body
        const { idRoom } = req.params
        const room = await roomRepository.findOne({
            where: { id: Number(idRoom) },
            relations: { subjects: true }
        })
        if (!room) {
            return res.status(404).json({ message: 'Class not found' })
        }
        const subject = await subjectRepository.findOneBy({ id: Number(subject_id) })

        if (!subject) {
            return res.status(404).json({ message: 'Subject not found' })
        }
        room.subjects.push(subject)
        await roomRepository.save(room)
        return res.status(201).json(room)
    }

    async list(req: Request, res: Response) {
        const rooms = await roomRepository.find({
            relations: {
                subjects: true,
            }
        })
        return res.status(200).json(rooms)
    }

    async listOne(req: Request, res: Response) {
        const { idRoom } = req.params
        const room = await roomRepository.findOne({
            where: { id: Number(idRoom) },
            relations: { subjects: true, videos: true },
        })
        return res.status(200).json(room)
    }
}