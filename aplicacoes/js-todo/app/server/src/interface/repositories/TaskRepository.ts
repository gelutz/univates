import { Tasks } from "@prisma/client"
import { PrismaClient } from "../database/PrismaClient"


class TaskRepository {
    async find({ ...filter }) {

        const tasks = await PrismaClient.tasks.findFirst({
            where: filter
        })

        return tasks
    }

    create: () => {

    }
}

export default new TaskRepository()