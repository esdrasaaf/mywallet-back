import { ObjectId } from "mongodb"
import { registersCollection, usersCollection } from "../database/db.js"

export async function getRegisters (req, res) {
    if (!req.session) {return res.status(500).send("Sua sessão expirou")}
    const { userId } = req.session

    try {
        const user = await usersCollection.findOne({_id: userId})
        const registers = await registersCollection.find({idx: userId}).toArray()
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