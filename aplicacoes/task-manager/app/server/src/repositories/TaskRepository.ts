import { Tasks } from "@prisma/client"
import { client } from '../database/Client'

class TaskRepository {
    async find({ ...filter }) {

        const tasks = await client.tasks.findFirst({
            where: filter
        })

        return tasks
    }

    create: () => {

    }
}

export default new TaskRepository()