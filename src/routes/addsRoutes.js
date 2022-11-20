import { postInput, postOutput } from '../controllers/addsControllers.js'
import validateToken from '../middlewares/tokenMiddleware.js'
import { validateInput, validateOutput } from '../middlewares/inputOutputMiddleware.js'
import { Router } from 'express'

const router = Router()
router.use(validateToken)

router.post("/add-input", validateInput, postInput)

router.post("/add-output", validateOutput, postOutput)

export default router