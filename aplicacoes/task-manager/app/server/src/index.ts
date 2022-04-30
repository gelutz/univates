import express, { Response } from 'express'
import TaskController from './core/controllers/TaskController'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json());
app.get('/', (_, response: Response) => { response.json({ teste: 'oi' }) })
// app.get('/task/:id', TaskController.get)
app.get('/task/all', TaskController.getAll)


app.listen(3000, () => console.log('Server rodando na porta 3k'))