const { Pool } = require('pg');
const env = require('../../env')

module.exports = {
    connect() {
        if (global.connection) {
            return global.connection.connect();
        }

        const pool = new Pool({
            connectionString: `postgres://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_DATABASE}`
        });

        global.connection = pool;
        return pool.connect();
    }
}
