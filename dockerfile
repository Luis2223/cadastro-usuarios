FROM node:14.17.5-alpine3.14

# Criação do projeto
WORKDIR /public

COPY package*.json ./

# Dependencias
RUN npm install knex -g
RUN npm install 

COPY . .

EXPOSE 3000

# CMD ["node", "src/server.js"]