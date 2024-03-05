const sequelize = require('../../src/config/sequelize') 
const Sequelize = require('sequelize') 

const Categoria = require('./categoria')

const categoria = Categoria(sequelize, Sequelize.DataTypes)

const db = {
    categoria,
    sequelize
}

module.exports = db