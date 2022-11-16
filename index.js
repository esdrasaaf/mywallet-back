import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'

const app = express()

// Configs
app.use(cors())
app.use(express.json())

// Connecting to MongoDB
const mongoClient = new MongoClient("mongodb://localhost:27017")
let db;
let usersCollection;

mongoClient.connect().then(() => {
    db = mongoClient.db("myWallet")
    usersCollection = db.collection("users")
})

// API Code
app.post("/sign-in", async (req, res) => {
    const { email, password } = req.body
    res.send("funfou")
    console.log(email, password)
})

app.post("/sign-up", async (req, res) => {
    const { email, password, name } = req.body
    res.send("funfou")
    console.log(email, password, name)
})

app.listen(5000, console.log("Running on port 5000"))