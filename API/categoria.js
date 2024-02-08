const express = require('express')
const router = express.Router()

console.log("Chamou Categoria!")

//
router.get('/', (req, res) => {
    res.send('Lista de Categorias')
})

//exemplo de requisição post
router.post("/cadastro", (req, res) => {
    const dados = req.body
    console.log(dados)
    res.send('POST - Registro de CATEGORIA')
})

module.exports = router