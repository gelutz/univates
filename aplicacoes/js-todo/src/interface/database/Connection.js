const postgresAdapter = require("./adapters/postgres")

module.exports = {
    postgres: () => postgresAdapter

    // other connections
}

