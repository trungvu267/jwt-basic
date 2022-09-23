import { Router } from 'express'
import { login, dashboard } from '../controllers/main.controller.js'
import authenticationMiddleWare from '../middleware/auth.js'
const route = Router()

route.get('/dashboard', authenticationMiddleWare, dashboard)
route.post('/login/register', login)

export default route
