const { Router } =  require('express');

const routes = new Router();
const users = require('./app/controllers/UsersController')

routes.get('/users', users.index)
routes.get('/users/:id_user', users.index)

routes.post('/users', users.store)
routes.put('/users/:id_user', users.update)
// Deletar todos os usuários
routes.delete('/users', users.delete)
// Deletar apenas um
routes.delete('/users/:id_user', users.delete)

module.exports = routes;