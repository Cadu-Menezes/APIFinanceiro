const express = require('express')
const routers = require('./API')
const {sequelize} = require('./models')


const app =  express()

//fazendo com que as rotas aceitem o formato json
app.use(express.json())
app.use('/', routers)

sequelize.sync().then(() => {
    console.log("Conectou com o bando de dados!")
})

//Roda a aplicação
app.listen(3000, () => {console.log("App online")})