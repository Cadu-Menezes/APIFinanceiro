const express = require('express')
const router = express.Router()
const { categoria } = require('../models')
const CategoriaService = require('../services/categoria')
const { body, check, validationResult } = require('express-validator');

const categoriaService = new CategoriaService(categoria)

//Listando todas as categorias
router.get('/lista', async(req, res) => {

    const categorias = await categoriaService.lista()
    res.send(categorias)

})

//Cadastrar uma nova categoria
router.post("/cadastro", 

    //express-validador - Fazer validações nos campos
    //Verifico se o campo categoriadescricao não está vazio e o minino de characters
    body('categoriadescricao').not().isEmpty().trim().escape(), 
    check('categoriadescricao').isLength({ min: 5 }).withMessage('Mínino de 5 dígitos'),
    
    async(req, res) => {
    
    //verificando se na req teve algum erro estourado pelo validador
    const errors = validationResult(req)
   
    //caso sim retorno 400 com o erro q estourou
    if (!errors.isEmpty()){ 
   
        return res.status(400).json({ errors: errors.array()})
   
    }

    const {categoriadescricao, categoriaentrada, categoriadata} = req.body    
        
    try{

        await categoriaService.cadastrar({categoriadescricao, categoriaentrada, categoriadata})
        res.status(200).send('categoria adicionada com sucesso!')
    
    }
    catch (erro){
    
        res.status(400).send('Não foi possível inserir a categoria.')
    
    }

})

module.exports = router