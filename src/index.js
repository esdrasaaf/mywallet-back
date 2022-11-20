import express from 'express'
import cors from 'cors'
import { postLogout, postSignIn, postSignUp } from './controllers/authController.js'
import { deleteRegister, getRegisters } from './controllers/registersController.js'
import { postInput, postOutput } from './controllers/addsControllers.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

// Configs
app.use(cors())
app.use(express.json())

// API Code
app.post("/sign-in", postSignIn)

app.post("/sign-up", postSignUp)

app.post("/logout", postLogout)

app.get("/registers", getRegisters)

app.delete("/registers", deleteRegister)

app.post("/add-input", postInput)

app.post("/add-output", postOutput)

app.listen(5000, console.log("Running on port 5000"))