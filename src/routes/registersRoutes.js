import { deleteRegister, getRegisters } from '../controllers/registersController.js'
import { Router } from 'express'

const router = Router()

router.get("/registers", getRegisters)

router.delete("/registers", deleteRegister)

export default router