const express = require('express')
const router = express.Router()
const { categoria } = require('../models')


//
router.get('/lista', async(req, res) => {
    const categorias = await categoria.findAll()
    res.send(categorias)
})

//exemplo de requisição post
router.post("/cadastro", async(req, res) => {
    const {categoriaid, categoriadescricao, categoriaentrada, categoriadata} = req.body
    
    await categoria.create({categoriaid, categoriadescricao, categoriaentrada, categoriadata})
    res.send('categoria adicionada com sucesso!')
})

module.exports = router