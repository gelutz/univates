const { Pool } = require('pg');
const { DB } = require('../../config');
const DatabaseAdapter = require('./adapter');

class Postgres extends DatabaseAdapter {
    constructor() {
        super()
        if (!this.connection) {
            const connectionString =
                `postgres://${DB.USER}:${DB.PASSWORD}@${DB.HOST}:${DB.PORT}/${DB.DATABASE}`
            try {
                this.connection = new Pool(connectionString)
            } catch (error) {
                return
            }
        }

        return this.connection.connect()
    }
}

module.exports = new Postgres()

