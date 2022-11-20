import joi from 'joi'

const userSchema = joi.object ({
    name: joi.string().required().min(3).max(100),
    email: joi.string().email().required(),
    password: joi.string().required()
})

export default userSchema