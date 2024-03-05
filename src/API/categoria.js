const express = require('express')
const router = express.Router()
const { categoria } = require('../models')
const CategoriaService = require('../services/categoria')

const categoriaService = new CategoriaService(categoria)

//
router.get('/lista', async(req, res) => {
    const categorias = await categoriaService.lista()
    res.send(categorias)
})

//exemplo de requisição post
router.post("/cadastro", async(req, res) => {
    const {categoriaid, categoriadescricao, categoriaentrada, categoriadata} = req.body
    
    await categoriaService.cadastrar({categoriaid, categoriadescricao, categoriaentrada, categoriadata})
    res.send('categoria adicionada com sucesso!')
})

module.exports = router