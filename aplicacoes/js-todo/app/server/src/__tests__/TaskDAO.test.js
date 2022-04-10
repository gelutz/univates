const TaskDAO = require("../core/daos/TaskDAO");
const Task = require("../domain/entities/Task");
const TError = require('../interface/errors/TError')

describe('TaskDAO functionalities', () => {
    it('should create Task from object with title', () => {
        const stub = TaskDAO.create({
            title: 'Title #1'
        })

        expect(stub).toBeInstanceOf(Task)
    })

    it('should not create Task from object without required fields', () => {
        const stub = { description: 'Description #1' }

        try {
            const task = TaskDAO.create(stub)

        } catch (error) {
            expect(error).toBeInstanceOf(TError)

            throw error
        }
    })
})