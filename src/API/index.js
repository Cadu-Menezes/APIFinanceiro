const express = require('express')
const movimentacaoRouter = require('./movimentacao')
const categoriaRouter = require('./categoria')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('app online!')
})

router.use('/movimentacao', movimentacaoRouter)
router.use('/categoria', categoriaRouter)


module.exports = router