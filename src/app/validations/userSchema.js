const Joi = require('joi');

const createUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(7).required()
})

const updateUserSchema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().min(3).max(7)
})

module.exports = {
    createUserSchema,
    updateUserSchema
}