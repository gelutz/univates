const { Client } = require('pg');
const { DB } = require('../../config');

class Postgres {
    client
    constructor() {
        if (!this.client) {
            const connectionOptions = {
                user: DB.USER,
                password: DB.PASSWORD,
                host: DB.HOST,
                port: DB.PORT,
                database: DB.DATABASE,
            }

            this.client = new Client(connectionOptions)
        }
    }

    connect() {
        return new Promise((resolve, reject) => {
            this.client.connect().then(connection => {
                resolve(connection)
            }).catch(error => {
                reject(error)
            })
        })
    }

    rawQuery(sql) {
        return this.client.query(sql)
            .then(result => result.rows)
            .catch(err => err.stack)
    }

    query(sql, values) {
        return this.client.query(sql, values)
            .then(result => result.rows)
            .catch(err => err.stack)
    }

    insert(table, columns, values) {
        let sql = 'INSERT INTO ' + table

        if (columns.length != values.length) {
            new TError('fuck-up', { columns, values })
        }

        sql += ' ( '
        columns.forEach((column, index) => {
            sql += column

            if (index != columns.length - 1) {
                sql += ', '
            }
        });

        sql += ' ) values ( '
        values.forEach((column, index) => {
            sql += column

            if (index != values.length - 1) {
                sql += ', '
            }
        });
        sql += ');'

        return this.rawQuery(sql)
    }

}

module.exports = new Postgres()

