const dotenv = require('dotenv').config()

module.exports = {
    DB: {
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        HOST: process.env.DB_HOST,
        PORT: process.env.DB_PORT,
        DATABASE: process.env.DB_DATABASE
    }
}