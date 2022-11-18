import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import { postSignIn, postSignUp } from './controllers/authController.js'
import { getRegisters } from './controllers/registersController.js'
import { postInput, postOutput } from './controllers/addsControllers.js'

const app = express()
dotenv.config()

// Configs
app.use(cors())
app.use(express.json())

// Connecting to MongoDB
const mongoClient = new MongoClient(process.env.MONGO_URI)
await mongoClient.connect()
const db = mongoClient.db("myWallet")

// Exports
export const usersCollection = db.collection("users")
export const registersCollection = db.collection("registers")
export const sessionsCollection = db.collection("sessions")

// API Code
app.post("/sign-in", postSignIn)

app.post("/sign-up", postSignUp)

app.get("/registers", getRegisters)

app.post("/add-input", postInput)

app.post("/add-output", postOutput)

app.listen(5000, console.log("Running on port 5000"))