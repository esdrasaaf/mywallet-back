import joi from 'joi'
import bcrypt from 'bcrypt'
import { usersCollection } from '../index.js'

const registerSchema = joi.object ({
    name: joi.string().required().min(3).max(100),
    email: joi.string().email().required(),
    password: joi.string().required()
})

export async function postSignIn (req, res) {
    const { email, password } = req.body

    try {
        const registeredUser = await usersCollection.findOne({ email })
        const passEquals = bcrypt.compareSync(password, registeredUser.password)

        if (!registeredUser || !passEquals) {
            return res.status(401).send("Dados de login incorretos")
        }       

        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function postSignUp (req, res) {
    const user = req.body
    
    try {
        const alreadyRegistered = await usersCollection.findOne({email: user.email})
        if (alreadyRegistered) {
            return res.status(409).send("Email já cadastrado, tente outro!")
        }

        const { error } = registerSchema.validate(user, { abortEarly: false })
        if (error) {
            const errors = error.details.map((d) => details.message)
            return res.status(400).send(errors)
        }
    
        const hashPassword = bcrypt.hashSync(user.password, 10)
        await usersCollection.insertOne({...user, password: hashPassword})

        res.sendStatus(201)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}