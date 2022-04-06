import express from 'express'

const app = express()

app.get('/', (request, response) => {
    response.json({ hello: 'world' })
})

app.listen(3000, () => console.log('Server rodando na porta 3k'))