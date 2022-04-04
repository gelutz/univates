const TError = require("../errors/TError")
const Postgres = require("./connections/Postgres")

class Database {
    client
    constructor(client) {
        this.client = client
    }

    query = Postgres.rawQuery

    select(sql, values) {
        return this.client.query(sql, values).then(result => result)
    }

    insert(table, object) {
        const columns = Object.keys(object)
        const values = Object.values(object)

        this.client.insert(table, columns, values)
    }
}

module.exports = { database: new Database(Postgres) }