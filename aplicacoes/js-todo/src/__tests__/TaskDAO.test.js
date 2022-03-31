const TaskDAO = require("../core/daos/TaskDAO");
const Task = require("../core/entities/Task");
const TaskComponent = require("../presentation/components/Task/TaskComponent");

it('should create a DAO for tasks', () => {
    const task = TaskDAO.create({
        title: 'Teste 1'
    })

    expect(task).toBeInstanceOf(Task)
})


// console.log('TaskDAO test', task)

// const taskComponent = TaskComponent(task)

// taskComponent.render().then(console.log)