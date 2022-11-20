import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

// Connecting to MongoDB
const mongoClient = new MongoClient(process.env.MONGO_URI)

try {
    await mongoClient.connect()
    console.log("MongoDB conectado")
} catch (error) {
    console.log(error)
}

const db = mongoClient.db("myWallet")

// Export Collections
export const usersCollection = db.collection("users")
export const registersCollection = db.collection("registers")
export const sessionsCollection = db.collection("sessions")