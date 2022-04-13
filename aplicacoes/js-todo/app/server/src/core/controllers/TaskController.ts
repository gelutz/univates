import { Request, Response } from 'express'
import TaskRepository from "../repositories/TaskRepository"

class TaskController {

    async getAll(request: Request, response: Response) {
        const result = await TaskRepository.findAll()
        console.log(result);

        return response.status(200).json(result)
    }

    get(request: Request, response: Response) {
        const { created_at, due_date } = request.body

        return TaskRepository.findByRange(created_at, due_date).then(tasks => {
            response.status(200).json({
                data: tasks
            })
        }).catch(error => {
            response.status(400).json({
                error
            })
        })

    }

    post(request: Request, response: Response) {
        const data = request.body

        return TaskRepository.insert({
            ...data
        }).then(task => {
            response.status(200).json({
                data: task
            })
        }).catch(error => {
            response.status(400).json({
                error
            })
        })
    }
}

export default new TaskController()