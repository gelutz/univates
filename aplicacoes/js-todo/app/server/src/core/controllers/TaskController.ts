import { Request, Response } from 'express'
import TaskRepository from "../repositories/TaskRepository"

type RouteDTO = {
    request: Request
    response: Response
}

class TaskController {

    get({ request, response }: RouteDTO) {
        const { created_at, due_date } = request.body

        const tasks = TaskRepository.findByRange(created_at, due_date).then(tasks => {
            response.status(200).json({
                data: tasks
            })
        }).catch(error => {
            response.status(400).json({
                error
            })
        })

    }

    post({ request, response }: RouteDTO) {
        const data = request.body

        TaskRepository.insert({
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