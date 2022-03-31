module.exports = {
    connect(pool) {
        if (global.connection) {
            return global.connection.connect();
        }

        global.connection = pool;
        return pool.connect();
    }
}