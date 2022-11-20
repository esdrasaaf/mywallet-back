import bodySchema from "../models/addRegisterModel.js"

export async function validateInput(req, res, next) {
    const { value, description, data } = req.body
    const { userId } = req.session

    try {
        const { error } = bodySchema.validate(req.body, { abortEarly: false })
        if (error) {
            const errors = error.details.map((d) => d.message)
            return res.status(400).send(errors)
        }
        const register = { value, description, data, type: "input", idx: userId}
        req.register = register
    } catch (error) {
        res.sendStatus(401)
    }
    
    next()
}

export async function validateOutput(req, res, next) {
    const {value, description, data} = req.body
    const { userId } = req.session

    try {
        const { error } = bodySchema.validate(req.body, { abortEarly: false })
        if (error) {
            const errors = error.details.map((d) => d.message)
            return res.status(400).send(errors)
        }

        const register = { value, description, data, type: "output", idx: userId}
        req.register = register
    } catch (error) {
        res.sendStatus(401)
    }

    next()
}