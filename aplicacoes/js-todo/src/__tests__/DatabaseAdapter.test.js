const { postgres } = require("../interface/database/Connection")
const Adapter = require("../interface/database/adapters/postgres")
describe('Tests for the database connection adapter class', () => {
    it('', () => {
        const connection = postgres()
        expect(connection).toBeInstanceOf(Adapter)
    })
})