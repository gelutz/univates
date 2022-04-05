const { database } = require("../../interface/database/Database")

module.exports = class TaskRepository {
    static findAll() {
        return database.query('SELECT * FROM tasks').then(result => result)
    }

    static insert(object) {
        database.insert('tasks', object)
    }
}