import joi from 'joi'

const bodySchema = joi.object ({
    value: joi.string().required().min(1).max(10),
    description: joi.string().min(3).max(100).required(),
    data: joi.string().required()
})

export default bodySchema