const express = require('express')
const router = express.Router()
const { categoria } = require('../models')
const CategoriaService = require('../services/categoria')
const { body, check, validationResult } = require('express-validator');

const categoriaService = new CategoriaService(categoria)

//
router.get('/lista', async(req, res) => {
    const categorias = await categoriaService.lista()
    res.send(categorias)
})

//exemplo de requisição post
router.post("/cadastro", async(req, res) => {

    const {categoriadescricao, categoriaentrada, categoriadata} = req.body
    
    // body('categoriadescricao').not().isEmpty().trim().escape(),
    // check('categoriadescricao').isLength({ min: 5 }).withMessage('Mínino de 5 dígitos'),
    
    try{
        await categoriaService.cadastrar({categoriadescricao, categoriaentrada, categoriadata})
        res.send('categoria adicionada com sucesso!')
    }catch (erro){
        res.send('Não foi possível inserir a categoria.')
    }

})

module.exports = router