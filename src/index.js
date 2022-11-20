import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

// Routers
import authRouters from './routes/authRoutes.js'
import registersRouters from './routes/registersRoutes.js'
import addsrRouters from './routes/addsRoutes.js'

// Configs
app.use(cors())
app.use(express.json())
app.use(authRouters)
app.use(registersRouters)
app.use(addsrRouters)

app.listen(5000, console.log("Running on port 5000"))