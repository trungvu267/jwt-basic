import { Router } from 'express'
import { login, dashboard } from '../controllers/main.controller.js'
const route = Router()

route.get('/dashboard', dashboard)
route.post('/login', login)

export default route
