// Controllers
import { postLogout, postSignIn, postSignUp } from '../controllers/authController.js'

// Middlewares
import validateToken from '../middlewares/tokenMiddleware.js'

import { Router } from 'express'

const router = Router()

router.post("/sign-in", postSignIn)

router.post("/sign-up", postSignUp)

router.post("/logout", validateToken, postLogout)

export default router