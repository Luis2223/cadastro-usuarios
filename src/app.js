const express = require('express');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express')

const swaggerFile = require('./app/public/documentation/swagger_output.json');
const knex = require('./app/database');

class AppServer {
    constructor() {
        this.server = express();
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.server.use(express.json())
    }

    routes() {
        this.server.use('/api/v1', routes);
        this.server.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
    }
    
}

module.exports = new AppServer().server