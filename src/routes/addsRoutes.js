import { postInput, postOutput } from '../controllers/addsControllers.js'
import { Router } from 'express'

const router = Router()

router.post("/add-input", postInput)

router.post("/add-output", postOutput)

export default router