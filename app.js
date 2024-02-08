const express = require('express')
const app =  express()

const routers = require('./API')

//fazendo com que as rotas aceitem o formato json
app.use(express.json())
app.use('/', routers)

//Roda a aplicação
app.listen(3000, () => {console.log("App online")})