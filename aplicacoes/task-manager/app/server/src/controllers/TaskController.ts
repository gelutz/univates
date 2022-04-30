import { Request, Response } from 'express'
import TaskRepository from '../repositories/TaskRepository'

class TaskController {
    async findById(request: Request, response: Response) {
        const { id } = request.body

        if (!id) {
            return response.status(404).json({ error: 'nothing found' })
        }

        const task = TaskRepository.find({ id })
        return response.status(200).json({ task })
    }
}

export default new TaskController()