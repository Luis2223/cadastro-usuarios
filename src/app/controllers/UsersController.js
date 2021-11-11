const knex = require("../database");
const { internalErrorServer, badRequest, created, ok } = require("../helpers/httpResponse");
const { createUserSchema, updateUserSchema } = require("../validations/userSchema");

class UsersController {
    async index(req, res) {
        try {
            let users;
            if (req.params.id_user) {
                users = await knex('users').where('id', req.params.id_user)
            } else {
                users = await knex('users').orderBy('id');
            }
            return ok(res, users)
        } catch (error) {
            return internalErrorServer(res, error)
        }
 
    }

    async store(req, res) {
        try {
            const user = createUserSchema.validate(req.body)

            if (user.error) {
                return badRequest(res, user.error.details)
            }
    
            await knex('users').insert(user.value);
            
            return created(res, { message: 'ok'})
        } catch (error) {
            return internalErrorServer(res, error)
        }

    }

    async update(req, res) {
        try {
            const user = updateUserSchema.validate(req.body)

            if (user.error) {
                return badRequest(res, user.error.details)
            }
    
            await knex('users').where('id', req.params.id_user).update(req.body)
            
            return created(res, { message: 'ok'})
        } catch (error) {
            return internalErrorServer(res, error)
        }
 

    }

    async delete(req, res) {
        try {
            if (req.params.id_user) {
                await knex('users').where('id', req.params.id_user).del()
            } else {
                await knex('users').del()
            }
            
            return created(res, { message: 'ok'})
        } catch (error) {
            return internalErrorServer(res, error)
        }

    }
}


module.exports = new UsersController();