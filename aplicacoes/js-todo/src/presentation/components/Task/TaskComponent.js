const { join } = require("path");
const Component = require("../Component");

module.exports = ({ ...task }) => {
    return {
        ...task,
        async render() {
            const newTask = {
                id: task.id
            }

            Object.entries(task).forEach(([key, value]) => {
                if (typeof value == 'string') {
                    newTask[key] = value
                }

                else if (typeof value == 'number') {
                    newTask[key] = `${value}`
                }

                else if (value instanceof Date) {
                    newTask[key] = value.toLocaleDateString()
                }
            })

            return await Component.parseHTML(join(__dirname, 'index.html'), newTask)
        },
    }
}