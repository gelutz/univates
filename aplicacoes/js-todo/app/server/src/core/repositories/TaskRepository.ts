import { Task } from "../../domain/entities/Task"

const { database } = require("../../interface/database/Database")

class TaskRepository {
    static async findByRange(
        created_at?: Date | [Date, Date],
        completed_at?: Date | [Date, Date],
        due_date?: Date | [Date, Date]
    ): Promise<Task | undefined> {
        if (!created_at && !completed_at && !due_date) {
            return
        }

        let query = 'SELECT * FROM tasks'
        let keyword = 'WHERE'

        const args = [created_at, completed_at, due_date]

        args.forEach(arg => {
            let used = false
            if (Array.isArray(arg)) {
                query += `${keyword} between ${arg[0]} and ${arg[1]}`
                used = true
            }
            else {
                query += `${keyword} = ${arg}`
            }

            if (used) {
                keyword = 'AND'
            }
        });

        const result = await database.query(query)

        return result
    }

    static async findAll() {
        return await database.query('SELECT * FROM tasks')
    }

    static insert(object) {
        return database.insert('tasks', object)
    }
}

export default TaskRepository