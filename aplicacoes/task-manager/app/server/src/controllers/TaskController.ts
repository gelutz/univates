import { Request, Response } from 'express'
import TaskRepository from '../repositories/TaskRepository'

class TaskController {
    async findById(request: Request, response: Response) {
        const { id } = request.params

        if (!id) {
            return response.status(404).json({ error: 'no id provided' })
        }

        const task = await TaskRepository.find({ id: Number(id) })

        if (!task) {
            return response.status(404).json({ error: 'nothghig found' })
        }

        return response.status(200).json({ task })
    }
}

export default new TaskController()