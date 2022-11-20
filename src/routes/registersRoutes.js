// Controlles
import { deleteRegister, getRegisters } from '../controllers/registersController.js'

// Middlewares
import validateToken from '../middlewares/tokenMiddleware.js'

import { Router } from 'express'

const router = Router()

router.use(validateToken)

router.get("/registers", getRegisters)

router.delete("/registers", deleteRegister)

export default router