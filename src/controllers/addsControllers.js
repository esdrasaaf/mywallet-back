import { registersCollection } from "../index.js"
import joi from 'joi'

export async function postInput (req, res) {
    const {value, description, data} = req.body
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")
    const register = { value, description, data, type: "input"}

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
        const { error } = bodySchema.validate(req.body, { abortEarly: false })
        if (error) {
            const errors = error.details.map((d) => d.message)
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
    const {value, description, data} = req.body
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")
    const register = { value, description, data, type: "output"}

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
        const { error } = bodySchema.validate(req.body, { abortEarly: false })
        if (error) {
            const errors = error.details.map((d) => d.message)
            return res.status(400).send(errors)
        }

        await registersCollection.insertOne(register)
        res.status(200).send("Registro inserido com sucesso")
    } catch (error) {
        console.log(error)
        res.status(500).send("Sua sessão expirou")
    }
}