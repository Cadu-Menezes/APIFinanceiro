const express = require('express')
const router = express.Router()

const todasMovimentacoes = []

console.log("Chamou movimentacao")

//
router.get('/', (req, res) => {
    res.send('Lista de Movimentações!')
})

//exemplo de requisição post
router.post("/cadastro", (req, res) => {
    const dados = req.body
    console.log(dados)
    res.json(todasMovimentacoes)
})


module.exports = router