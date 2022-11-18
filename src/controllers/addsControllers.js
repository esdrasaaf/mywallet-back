import { registersCollection } from "../index.js"
import joi from 'joi'

export async function postInput (req, res) {
    const register = req.body
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")

    // Schema
    const bodySchema = joi.object ({
        value: joi.string().required().min(3),
        description: joi.string().min(3).max(100).required(),
        data: joi.string().required()
    })
    
    if (!token) {
        res.sendStatus(401)
    }

    try {
        const { error } = bodySchema.validate(register, { abortEarly: false })
        if (error) {
            const errors = error.details.map((d) => details.message)
            return res.status(400).send(errors)
        }

        await registersCollection.insertOne(register)
        res.status(200).send("Registro inserido com sucesso")
    } catch (error) {
        console.log(error)
        res.status(500).send("Sua sessão expirou")
    }
}

export async function postOutput (req, res) {
    const register = req.body
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")

    // Schema
    const bodySchema = joi.object ({
        value: joi.string().required().min(3),
        description: joi.string().min(3).max(100).required(),
        data: joi.string().required()
    })

    if (!token) {
        res.sendStatus(401)
    }

    try {
        const { error } = bodySchema.validate(register, { abortEarly: false })
        if (error) {
            const errors = error.details.map((d) => details.message)
            return res.status(400).send(errors)
        }

        await registersCollection.insertOne(register)
        res.status(200).send("Registro inserido com sucesso")
    } catch (error) {
        console.log(error)
        res.status(500).send("Sua sessão expirou")
    }
}