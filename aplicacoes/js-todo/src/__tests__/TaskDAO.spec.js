const TaskDAO = require("../core/daos/TaskDAO");
const TaskComponent = require("../presentation/components/Task/TaskComponent");

const task = TaskDAO.create({
    title: 'Teste 1'
})

console.log('TaskDAO test', task)

const taskComponent = TaskComponent(task)

taskComponent.render().then(console.log)