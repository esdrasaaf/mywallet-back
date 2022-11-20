import { postLogout, postSignIn, postSignUp } from '../controllers/authController.js'
import { Router } from 'express'

const router = Router()

router.post("/sign-in", postSignIn)

router.post("/sign-up", postSignUp)

router.post("/logout", postLogout)

export default router