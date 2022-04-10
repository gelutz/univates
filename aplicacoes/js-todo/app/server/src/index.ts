import express from 'express'
import TaskController from './core/controllers/TaskController'

const app = express()
const router = express.Router()

router.get(':id', TaskController.post)
router.post('/', TaskController.post)

app.use('/task', router)

app.listen(3000, () => console.log('Server rodando na porta 3k'))