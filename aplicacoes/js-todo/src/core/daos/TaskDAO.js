const Task = require("../entities/Task")
const DAO = require("./DAO")

class TaskDAO extends DAO {
    Entity = Task
    create({ ...task }) {
        task.id = this.id
        this.id++
        return super.create(task)
    }
}

module.exports = new TaskDAO()
