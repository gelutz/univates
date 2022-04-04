const express = require('express')

const app = express()

app.get('/', (request, response) => {
    console.log(request)
    response.sendStatus(200)
})

app.listen(8080, console.log)