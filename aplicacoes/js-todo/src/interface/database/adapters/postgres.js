const { Pool } = require('pg');
const { DB } = require('../../config');
const Connection = require('../Connection');

class Postgres extends Connection {
    constructor(connString) {
        return this.connect(new Pool(connString))
    }
}

const connectionString =
    `postgres://${DB.USER}:${DB.PASSWORD}@${DB.HOST}:${DB.PORT}/${DB.DATABASE}`

module.exports = new Postgres(connectionString)

