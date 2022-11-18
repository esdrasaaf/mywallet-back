import { registersCollection, usersCollection, sessionsCollecton } from "../index.js"

export async function getRegisters (req, res) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")

    if (!token) {
        res.sendStatus(401)
    }

    try {
        const registers = await registersCollection.find()
        const session = await sessionsCollecton.findOne({token})
        const user = await usersCollection.findOne({_id: session.userId})
        res.send(user)
    } catch (error) {
        console.log(error)
        res.status(500).send("Sua sessão expirou")
    }
}