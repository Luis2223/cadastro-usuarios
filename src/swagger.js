const swaggerAutogen = require('swagger-autogen')()

const outputFile = `./src/app/public/documentation/swagger_output.json`
const endpointsFiles = ['./src/routes.js']

const initialDoc = {
    info: {
        version: "1.0.0",
        title: "API Contele",
        description: "Documentação da API Contele, criada com o intuito de explicar os endpoints gerados para o teste de Dev Junior."
    },
    host: 'localhost:3000',
    basePath: '/api/v1/',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            name: 'Usuários',
            description: 'Endpoints para gestão de usuários.'
        }
    ],
    definitions: {
        Usuario: {
            email: 'lucas@gmail.com',
            password: '123'
        },
        AddUsuario: {
            $email: "lucas@gmail.com",
            $password: "123"
        }
    }
    
}

swaggerAutogen(outputFile, endpointsFiles, initialDoc)
.then(() => {
    require('./server.js')
});