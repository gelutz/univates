import express from 'express'
import TaskController from './core/controllers/TaskController'

const app = express()
const router = express.Router()

router.use('task/')
    .get(':id', TaskController.get)
    .post('/', TaskController.post)

app.use(router)

app.listen(3000, () => console.log('Server rodando na porta 3k'))