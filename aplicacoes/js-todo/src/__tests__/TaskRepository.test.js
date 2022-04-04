const TaskDAO = require("../core/daos/TaskDAO")
const TaskRepository = require("../core/repositories/TaskRepository")

describe('Tests for the Task repository class', () => {

    // when this test was created, i had no record on the table, so:
    it('should return an empty object', () => {
        TaskRepository.findAll().then(result => {
            expect(result).toBe({})

        })
    })

    it('should insert smt', () => {
        const task = TaskDAO.create({
            title: 'Test #1'
        })

        TaskRepository.insert(task)
    })
})