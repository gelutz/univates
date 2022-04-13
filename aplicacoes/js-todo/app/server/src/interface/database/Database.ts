import { postgres } from "./connections/Postgres"

class Database {
    client: typeof postgres
    constructor(client) {
        this.client = client
    }

    query = postgres.rawQuery

    select(sql, values) {
        return this.client.query(sql, values).then(result => result)
    }

    insert(table, object) {
        const columns = Object.keys(object)
        const values = Object.values(object)

        this.client.insert(table, columns, values)
    }
}

export const database = new Database(postgres)