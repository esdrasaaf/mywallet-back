import { registersCollection } from "../database/db.js"

export async function postInput (req, res) {
    const register = req.register

    try {
        await registersCollection.insertOne(register)
        res.status(200).send("Registro inserido com sucesso")
    } catch (error) {
        console.log(error)
        res.status(500).send("Sua sessão expirou")
    }
}

export async function postOutput (req, res) {
    const register = req.register

    try {
        await registersCollection.insertOne(register)
        res.status(200).send("Registro inserido com sucesso")
    } catch (error) {
        console.log(error)
        res.status(500).send("Sua sessão expirou")
    }
}