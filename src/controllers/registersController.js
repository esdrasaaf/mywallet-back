import { ObjectId } from "mongodb"
import { registersCollection, usersCollection, sessionsCollection } from "../database/db.js"

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

export async function deleteRegister (req, res) {
    let {id, token} = req.headers

    const tokenReplaced = token?.replace("Bearer ", "")

    if (!tokenReplaced) {
        res.sendStatus(401)
    }

    try {
        await registersCollection.deleteOne({_id: ObjectId(id)})
        res.status(200).send("Seu registro foi apagado com sucesso")
    } catch (error) {
        console.log(error)
        res.status(500).send("Sua sessão expirou")
    }
}