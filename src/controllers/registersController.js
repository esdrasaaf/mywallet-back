import { registersCollection, usersCollection, sessionsCollection } from "../index.js"

export async function getRegisters (req, res) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")

    if (!token) {
        res.sendStatus(401)
    }

    try {
        const session = await sessionsCollection.findOne({token})
        const user = await usersCollection.findOne({_id: session.userId})
        const registers = await registersCollection.find({idx: session.userId}).toArray()
        res.send({user, registers})
    } catch (error) {
        console.log(error)
        res.status(500).send("Sua sessão expirou")
    }
}