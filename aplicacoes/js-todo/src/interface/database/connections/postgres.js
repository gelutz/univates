const { Pool } = require('pg');
const { DB } = require('../../config');

class Postgres {
    pool
    constructor() {
        if (!this.pool) {
            const connectionString =
                `postgres://${DB.USER}:${DB.PASSWORD}@${DB.HOST}:${DB.PORT}/${DB.DATABASE}`
            try {
                this.pool = new Pool(connectionString)
            } catch (error) {
                return
            }
        }

        return this.pool
    }
}

module.exports = { Postgres: new Postgres() }

